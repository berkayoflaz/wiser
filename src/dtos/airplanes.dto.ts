import { IsNumber, IsString } from 'class-validator';

export class CreateAirplanesDto {
  @IsNumber()
  public factorial_serial_number: number;

  @IsNumber()
  public air_company_id: number;

  @IsNumber()
  public number_of_flights: number;

  @IsNumber()
  public flight_distance: number;

  @IsNumber()
  public fuel_capacity: number;

  @IsNumber()
  public type: number;
}
/*
factorial_serial_number: number;
    air_company_id: number;
    number_of_flights: number;
    flight_distance: number;
    fuel_capacity:number;
    type: boolean;
    */