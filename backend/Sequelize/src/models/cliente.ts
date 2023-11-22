import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Cliente extends Model {
    public nombre!: string;
    public apellido!: string;
    public direccion!: string;
    public ciudad!: string;
    public codigo!: string;
    public estado!: string;
  
  
  }
  
  export interface ClienteI {
    nombre: string;
    apellido: string;
    direccion: string;
    ciudad: string;
    codigo: string;
    estado: string;
  }
  
  Cliente.init(
    {
      nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
      apellido: {
          type: DataTypes.STRING,
          allowNull: false
        },
      direccion: {
          type: DataTypes.STRING,
          allowNull: false
        },
      ciudad: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
      codigo: {
          type: DataTypes.STRING,
          allowNull: false
        },
        estado: {
          type: DataTypes.ENUM('activo','inactivo'),
          allowNull: false
        } 
    },
  {
    tableName: "cliente",
    sequelize: database,
    timestamps: false
  }
);
