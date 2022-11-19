import { NextFunction, Request, Response } from 'express';
import { CreateCompaniesDto } from '@dtos/companies.dto';
import { Company } from '@interfaces/companies.interface';
import companiesService from '@services/companies.service';


class CompaniesController {
  public companiesService = new companiesService();

  public get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllData: Company[] = await this.companiesService.findAll();

      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const findOneUserData: Company = await this.companiesService.findById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateCompaniesDto = req.body;
      const createUserData: Company = await this.companiesService.create(data);

      res.status(201).json({ createData: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data: CreateCompaniesDto = req.body;
      const updateData: Company = await this.companiesService.update(id, data);

      res.status(200).json({ data: updateData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const deleteData: Company = await this.companiesService.delete(id);

      res.status(200).json({ data: deleteData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CompaniesController;
