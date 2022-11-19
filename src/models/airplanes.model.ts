import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Airplanes } from '@interfaces/airplanes.interface';

export type AirplanesCreationAttributes = Optional<Airplanes, 'id' | 'factorial_serial_number' | 'air_company_id'>;

export class AirplanesModel extends Model<Airplanes, AirplanesCreationAttributes> implements Airplanes {
  public id: number;
  public factorial_serial_number: number;
  public air_company_id: number;
  public number_of_flights: number;
  public flight_distance: number;
  public fuel_capacity: number;
  public type: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof AirplanesModel {
    AirplanesModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      factorial_serial_number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      air_company_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      number_of_flights: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      flight_distance: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fuel_capacity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }
    },
    {
      tableName: 'airplanes',
      sequelize,
    },
  );

  return AirplanesModel;
}
