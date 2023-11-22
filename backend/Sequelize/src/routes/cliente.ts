import { Request, Response, Application, Router } from "express";
import { ClienteController } from '../controllers/cliente.controller';

export class ClienteRoutes {
    public ClienteController: ClienteController =  new ClienteController();

    public routes(app: Application): void {
        
        app.route("/Cliente").get(this.ClienteController.getAllCliente)
        app.route("/Cliente").post(this.ClienteController.create)
        app.route("/Cliente/:id").patch(this.ClienteController.update)
        app.route("/Cliente/:id").get(this.ClienteController.getOneCliente)
        app.route("/Cliente/:id").delete(this.ClienteController.delete)
    }
}
