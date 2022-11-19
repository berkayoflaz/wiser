import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Flight } from '@interfaces/flights.interface';

export type FlightsCreationAttributes = Optional<Flight, 'id' >;

export class FlightsModel extends Model<Flight, FlightsCreationAttributes> implements Flight {
  public id: number;
  public flight_status: string;
  public air_company_id: number;
  public departure_country: string;
  public founded_at: Date;
  public destination_country:string;
  public distance:number;
  public estimated_flight_time:number;
  public started_at:Date;
  public ended_at:Date;
  public delay_started_at:Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof FlightsModel {
    FlightsModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      flight_status: {
        allowNull: false,
        type: DataTypes.ENUM('ACTIVE','COMPLETED','DELAYED','PENDING'),
        defaultValue: "PENDING"
      },
      air_company_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      departure_country: {
        allowNull: false,
        type: DataTypes.STRING(120),
      },
      destination_country: {
        allowNull: false,
        type: DataTypes.STRING(120),
      },
      distance: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      estimated_flight_time: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      started_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      ended_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      delay_started_at: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    },
    {
      tableName: 'flights',
      sequelize,
    },
  );

  return FlightsModel;
}
