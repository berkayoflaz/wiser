import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Company } from '@interfaces/companies.interface';

export type CompaniesCreationAttributes = Optional<Company, 'id' | 'name' | 'company_type'>;

export class CompaniesModel extends Model<Company, CompaniesCreationAttributes> implements Company {
  public id: number;
  public name: string;
  public company_type: string;
  public founded_at: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CompaniesModel {
    CompaniesModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(120),
      },
      company_type: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      founded_at: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }
    },
    {
      tableName: 'companies',
      sequelize,
    },
  );

  return CompaniesModel;
}
