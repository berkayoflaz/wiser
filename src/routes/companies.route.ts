import { Router } from 'express';
import CompaniesController from '@controllers/companies.controller';
import { CreateCompaniesDto } from '@dtos/companies.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CompaniesRoute implements Routes {
  public path = '/companies';
  public router = Router();
  public companiesController = new CompaniesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.companiesController.get);
    this.router.get(`${this.path}/:id(\\d+)`, this.companiesController.getById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCompaniesDto, 'body'), this.companiesController.create);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateCompaniesDto, 'body', true), this.companiesController.update);
    this.router.delete(`${this.path}/:id(\\d+)`, this.companiesController.delete);
  }
}

export default CompaniesRoute;
