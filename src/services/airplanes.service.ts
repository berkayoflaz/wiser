import DB from '@databases';
import { CreateAirplanesDto } from '@dtos/airplanes.dto';
import { HttpException } from '@exceptions/HttpException';
import { Airplane } from '@interfaces/airplanes.interface';
import { isEmpty } from '@utils/util';

class AirplanesService {
  public airplanes = DB.Airplanes;

  public async findAll(): Promise<Airplane[]> {
    const all: Airplane[] = await this.airplanes.findAll();
    return all;
  }

  public async findById(id: number): Promise<Airplane> {
    if (isEmpty(id)) throw new HttpException(400, "UserId is empty");

    const findAirplane: Airplane = await this.airplanes.findByPk(id);
    if (!findAirplane) throw new HttpException(409, "Airplane doesn't exist");

    return findAirplane;
  }

  public async create(data: CreateAirplanesDto): Promise<Airplane> {
    if (isEmpty(data)) throw new HttpException(400, "Airplanes is empty");

    const createAirplaneData: Airplane = await this.airplanes.create({ ...data });
    return createAirplaneData;
  }

  public async move(id: number, data: CreateAirplanesDto): Promise<Airplane> {
    if (isEmpty(data)) throw new HttpException(400, "data is empty");

    const findAirplanes: Airplane = await this.airplanes.findByPk(id);
    if (!findAirplanes) throw new HttpException(409, "Airplane doesn't exist");

    await this.airplanes.update({ air_company_id : data.air_company_id }, { where: { id: id } });

    const update: Airplane = await this.airplanes.findByPk(id);
    return update;
  }

  public async delete(id: number): Promise<Airplane> {
    if (isEmpty(id)) throw new HttpException(400, "Airplane doesn't existId");

    const findAirplanes: Airplane = await this.airplanes.findByPk(id);
    if (!findAirplanes) throw new HttpException(409, "Airplane doesn't exist");

    await this.airplanes.destroy({ where: { id: id } });

    return findAirplanes;
  }
}

export default AirplanesService;
