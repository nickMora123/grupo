import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from '../routes/index';   
var cors = require("cors");

export class App {
    public routePrv: Routes =  new Routes();
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes()
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false })); //leer json form
    }

    routes() {
        this.routePrv.ClienteRoutes.routes(this.app)
        this.routePrv.CocheRoutes.routes(this.app)
    }


   async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}

