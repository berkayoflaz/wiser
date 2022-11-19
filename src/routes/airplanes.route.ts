import { Router } from 'express';
import AirplanesController from '@controllers/airplanes.controller';
import { CreateAirplanesDto } from '@dtos/airplanes.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class AirplanesRoute implements Routes {
  public path = '/airplanes';
  public router = Router();
  public airplanesController = new AirplanesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.airplanesController.get);
    this.router.get(`${this.path}/:id(\\d+)`, this.airplanesController.getById);
    this.router.post(`${this.path}`, validationMiddleware(CreateAirplanesDto, 'body'), this.airplanesController.create);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateAirplanesDto, 'body', true), this.airplanesController.move);
    this.router.delete(`${this.path}/:id(\\d+)`, this.airplanesController.delete);
  }
}

export default AirplanesRoute;
