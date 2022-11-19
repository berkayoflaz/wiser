import DB from '@databases';
import { CreateFlightsDto } from '@dtos/flights.dto';
import { HttpException } from '@exceptions/HttpException';
import { Flight } from '@interfaces/flights.interface';
import { Company } from '@interfaces/companies.interface';
import { isEmpty } from '@utils/util';

class FlightsService {
  public fligths = DB.Flights;
  public companies = DB.Companies;

  public async findByNameAndStatus(name: string, status: string): Promise<Flight> {
    if (isEmpty(name)) throw new HttpException(400, "Name id is empty");
    if (isEmpty(status)) throw new HttpException(400, "Status id is empty");

    const findCompany: Company = await this.companies.findOne(
        {
            where:{
                name: name
            }
        }
    );
    if (!findCompany) throw new HttpException(409, "Company doesn't exist");
    const companyId = findCompany.id;

    const findData: any = await this.fligths.findAll(
        {
            where:{
                air_company_id: companyId,
                flight_status: status
            }
        }
    );
    return findData;
  }

  public async create(data: CreateFlightsDto): Promise<Flight> {
    if (isEmpty(data)) throw new HttpException(400, "Flight is empty");

    /*const findCompanies: Company = await this.fligths.findOne({ where: { name: data.name } });
    if (findCompanies) throw new HttpException(409, `This company ${data.name} already exists`);*/
    const createData: Flight = await this.fligths.create({ ...data });
    return createData;
  }

  public async changestatus(id: number, data: any): Promise<Flight> {
    if (isEmpty(data.flight_status)) throw new HttpException(400, "status is empty");

    const findCompany: Flight = await this.fligths.findByPk(id);
    if (!findCompany) throw new HttpException(409, "Flight doesn't exist");
    let update;
    if(data.flight_status == 'DELAYED'){
        if (isEmpty(data.delay_started_at)) throw new HttpException(400, "delay started at is empty");
        update = await this.fligths.update({ flight_status : data.flight_status,delay_started_at:data.delay_started_at }, { where: { id: id } });
    }else{
        update =  await this.fligths.update({ flight_status : data.flight_status }, { where: { id: id } }); 
    }
    
    return update;
  }
  /*
  public async delete(id: number): Promise<Flight> {
    if (isEmpty(id)) throw new HttpException(400, "User doesn't existId");

    const findCompany: Flight = await this.fligths.findByPk(id);
    if (!findCompany) throw new HttpException(409, "User doesn't exist");

    await this.fligths.destroy({ where: { id: id } });

    return findCompany;
  }*/
}

export default FlightsService;
