import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";


export class Coche extends Model {
  public matricula!: string;
  public codigo!: string;
  public modelo!: string;
  public color!: string;  
  public pvc!: string;
  public estado!: string;
}

export interface CocheI {
  matricula: string;
  codigo: string;
  modelo: string;
  color: string;
  pvc: string;
  estado: string;
}

Coche.init(
  {
    matricula: {
        type: DataTypes.STRING,
        allowNull: false
      },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    color: {
          type: DataTypes.STRING,
          allowNull: false
        },
    pvc: {
        type: DataTypes.STRING,
        allowNull: false
      },
    estado: {
        type: DataTypes.ENUM('activo','inactivo'),
        allowNull: false
      } 
  },
  {
    tableName: "coche",
    sequelize: database,
    timestamps: false
  }
);
