import {  Request, Response } from 'express';
    import { where } from 'sequelize/types';
    
    import { Coche, CocheI } from '../models/coche';
    
    export class CocheController {
        
        public async getAllCoche(req: Request, res:Response){
            try {
                const coche: CocheI[] = await Coche.findAll( ) // select * from coches;
                res.status(200).json({coche})
            } catch (error) {
    
            }
        }
        public async update(req: Request, res:Response){
            const { id:pk } = req.params;
    
            const {
                id,
                matricula,
                codigo,
                modelo,
                color,
                pvc,
                estado
            }= req.body
    
            try {
                let body:CocheI = {
                    matricula,
                    codigo,
                    modelo,
                    color,
                    pvc,
                    estado
                } 
    
                const cocheExist: CocheI | null = await Coche.findByPk(pk);
              
    
                if(!cocheExist) return res.status(500).json({msg:"El Coche No existe"})
                await Coche.update(
                    body,{
                        where: {id:pk}
                    }
                );  // select update from usuarios where id=pk
    
            } catch (error) {
    
            }
            const coche: CocheI | null = await Coche.findByPk(pk);
            if(coche) return res.status(200).json({coche})
    
        }

        public async create(req: Request, res:Response)
            {
                try {
                    let coche: CocheI = req.body;
                    const dataCoche: CocheI = await Coche.create({ ...coche });
                    res.status(200).json({ dataCoche });
                } catch (error) {
                    console.error('Error al crear el coche:', error);
                    res.status(500).json({ message: 'Hubo un problema al crear el coche.' });
                  }
        
            }
            public async getOneCoche(req: Request, res:Response){
                const { id: idParam } = req.params
        
                try {
                    const coche:CocheI | null = await Coche.findOne(
                        {
                            where: { 
                                id: idParam,
                            }
                        }
                    )
                    if (coche){
                        res.status(200).json(coche)
                    } else return  res.status(300).json({msg: "El Coche no existe"})
        
                } catch (error) {
                    res.status(500).json({msg: "Error Internal"})
                }
            }
    
            public async delete(req: Request, res:Response){
                const { id:pk } = req.params;
        
        
                try {
                    const cocheExist: CocheI | null = await Coche.findByPk(pk);
                    if(!cocheExist) return res.status(500).json({msg:"El Coche No existe"})
                    await Coche.destroy(
                        {
                            where: {id: pk}
                        }
                    )
                    res.status(200).json({msg:"Coche Eliminado"})
                } catch (error) {
        
                }
        
            } 

         
        
    
    }
