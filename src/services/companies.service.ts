import DB from '@databases';
import { CreateCompaniesDto } from '@dtos/companies.dto';
import { HttpException } from '@exceptions/HttpException';
import { Company } from '@interfaces/companies.interface';
import { isEmpty } from '@utils/util';

class CompaniesService {
  public companies = DB.Companies;

  public async findAll(): Promise<Company[]> {
    const all: Company[] = await this.companies.findAll();
    return all;
  }

  public async findById(id: number): Promise<Company> {
    if (isEmpty(id)) throw new HttpException(400, "UserId is empty");

    const findCompany: Company = await this.companies.findByPk(id);
    if (!findCompany) throw new HttpException(409, "User doesn't exist");

    return findCompany;
  }

  public async create(data: CreateCompaniesDto): Promise<Company> {
    if (isEmpty(data)) throw new HttpException(400, "Companies is empty");

    const findCompanies: Company = await this.companies.findOne({ where: { name: data.name } });
    if (findCompanies) throw new HttpException(409, `This company ${data.name} already exists`);
    const createCompaniesData: Company = await this.companies.create({ ...data });
    return createCompaniesData;
  }

  public async update(id: number, data: CreateCompaniesDto): Promise<Company> {
    if (isEmpty(data)) throw new HttpException(400, "userData is empty");

    const findCompany: Company = await this.companies.findByPk(id);
    if (!findCompany) throw new HttpException(409, "Company doesn't exist");

    await this.companies.update({ ...data }, { where: { id: id } });

    const update: Company = await this.companies.findByPk(id);
    return update;
  }

  public async delete(id: number): Promise<Company> {
    if (isEmpty(id)) throw new HttpException(400, "User doesn't existId");

    const findCompany: Company = await this.companies.findByPk(id);
    if (!findCompany) throw new HttpException(409, "User doesn't exist");

    await this.companies.destroy({ where: { id: id } });

    return findCompany;
  }
}

export default CompaniesService;
