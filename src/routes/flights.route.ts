import { Router } from 'express';
import FlightsController from '@controllers/flights.controller';
import { CreateFlightsDto } from '@dtos/flights.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class FlightsRoute implements Routes {
  public path = '/flights';
  public router = Router();
  public flightsController = new FlightsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //this.router.get(`${this.path}`, this.flightsController.get);
    this.router.get(`${this.path}/name`, this.flightsController.getByStatusAndName);
    this.router.post(`${this.path}`, validationMiddleware(CreateFlightsDto, 'body'), this.flightsController.create);
    //this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateCompaniesDto, 'body', true), this.companiesController.update);
    //this.router.delete(`${this.path}/:id(\\d+)`, this.flightsController.delete);
  }
}

export default FlightsRoute;
