import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Cliente, ClienteI } from '../models/cliente';

export class ClienteController {
    
    public async getAllCliente(req: Request, res:Response){
        try {
            const cliente: ClienteI[] = await Cliente.findAll( ) // select * from clientes;
            res.status(200).json({cliente})
        } catch (error) {

        }
    }

    public async update(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre,
            apellido,
            direccion,
            ciudad,
            codigo,
            estado
        }= req.body

        try {
            let body:ClienteI = {
            nombre,
            apellido,
            direccion,
            ciudad,
            codigo,
            estado
            } 

            const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
          

            if(!clienteExist) return res.status(500).json({msg:"El Cliente No existe"})
            await Cliente.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk

        } catch (error) {

        }
        const cliente: ClienteI | null = await Cliente.findByPk(pk);
        if(cliente) return res.status(200).json({cliente})

    }

    public async create(req: Request, res:Response)
        {
            try {
                let cliente: ClienteI = req.body;
                const dataCliente: ClienteI = await Cliente.create({ ...cliente });
                res.status(200).json({ dataCliente });
            } catch (error) {
                console.error('Error al crear el cliente:', error);
                res.status(500).json({ message: 'Hubo un problema al crear el cliente.' });
              }
    
        }
        public async getOneCliente(req: Request, res:Response){
            const { id: idParam } = req.params
    
            try {
                const cliente:ClienteI | null = await Cliente.findOne(
                    {
                        where: { 
                            id: idParam,
                        }
                    }
                )
                if (cliente){
                    res.status(200).json(cliente)
                } else return  res.status(300).json({msg: "El Cliente no existe"})
    
            } catch (error) {
                res.status(500).json({msg: "Error Internal"})            }
        }

        public async delete(req: Request, res:Response){
            const { id:pk } = req.params;
    
    
            try {
                const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
                if(!clienteExist) return res.status(500).json({msg:"El Cliente No existe"})
                await Cliente.destroy(
                    {
                        where: {id: pk}
                    }
                )
                res.status(200).json({msg:"Cliente Eliminado"})
            } catch (error) {
    
            }
    
        } 
}