export interface Flight {
    id: number;
    //could be ACTIVE, COMPLETED, DELAYED,
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
}