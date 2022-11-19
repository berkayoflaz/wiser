import { NextFunction, Request, Response } from 'express';
import { CreateFlightsDto } from '@dtos/flights.dto';
import { Flight } from '@interfaces/flights.interface';
import flightsService from '@services/flights.service';


class CompaniesController {
  public flightsService = new flightsService();


  public getByStatusAndName = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const status = String(req.headers.status);
      const name = String(req.headers.name);
      const findFlights: Flight = await this.flightsService.findByNameAndStatus(name,status);
      
      res.status(200).json({ data: findFlights, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateFlightsDto = req.body;
      const createData: Flight = await this.flightsService.create(data);

      res.status(201).json({ createData: createData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public changestatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data: CreateFlightsDto = req.body;
      const updateData: Flight = await this.flightsService.changestatus(id, data);

      res.status(200).json({ data: updateData, message: 'status changed' });
    } catch (error) {
      next(error);
    }
  };

  /*public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const deleteData: Flight = await this.flightsService.delete(id);

      res.status(200).json({ data: deleteData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };*/
}

export default CompaniesController;
