import { Request, Response, Application, Router } from "express";

import { CocheController } from '../controllers/coche.controller';

export class CocheRoutes {
    public CocheController: CocheController =  new CocheController();

    public routes(app: Application): void {
        
        app.route("/Coche").post(this.CocheController.create)
        app.route("/Coche").get(this.CocheController.getAllCoche)
        app.route("/Coche/:id").get(this.CocheController.getOneCoche)
        app.route("/Coche/:id").patch(this.CocheController.update)
        app.route("/Coche/:id").delete(this.CocheController.delete)
    }
}
