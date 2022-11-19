import { NextFunction, Request, Response } from 'express';
import { CreateAirplanesDto } from '@dtos/airplanes.dto';
import { Airplane } from '@interfaces/airplanes.interface';
import airplanesService from '@services/airplanes.service';


class CompaniesController {
  public airplanesService = new airplanesService();

  public get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllData: Airplane[] = await this.airplanesService.findAll();

      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const findOneUserData: Airplane = await this.airplanesService.findById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateAirplanesDto = req.body;
      const createUserData: Airplane = await this.airplanesService.create(data);

      res.status(201).json({ createData: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public move = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data: CreateAirplanesDto = req.body;
      const updateData: Airplane = await this.airplanesService.move(id, data);

      res.status(200).json({ data: updateData, message: 'airplane moved' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const deleteData: Airplane = await this.airplanesService.delete(id);

      res.status(200).json({ data: deleteData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CompaniesController;
