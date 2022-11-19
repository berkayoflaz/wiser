import { IsDate, IsNumber, IsString,IsDateString } from 'class-validator';

export class CreateFlightsDto {

  @IsNumber()
  public air_company_id: number;

  @IsString()
  public departure_country: string;

  @IsString()
  public destination_country: string;

  @IsNumber()
  public distance: number;

  @IsNumber()
  public estimated_flight_time: number;

  @IsDateString()
  public started_at: Date;

  @IsDateString()
  public ended_at: Date;

  @IsDateString()
  public delay_started_at: Date;
}
/*
flight_status: string;
    //
    air_company_id: number;
    departure_country:string;
    destination_country:string;
    distance:number;
    estimated_flight_time:number;
    started_at:Date;
    ended_at:Date;
    delay_started_at:Date;
    */