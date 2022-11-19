CREATE TABLE companies (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	company_type VARCHAR ( 50 ) NOT NULL,
	founded_at int NOT NULL
);

CREATE TABLE airplanes (
	id serial PRIMARY KEY,
	factorial_serial_number serial UNIQUE NOT NULL,
	air_company_id int,
	number_of_flights int NOT NULL,
    flight_distance int NOT NULL,
    fuel_capacity int NOT NULL,
    type int NOT NULL
);
CREATE TYPE flight_status_options AS ENUM('PENDING','ACTIVE','COMPLETED,','DELAYED');
CREATE TABLE flights (
	id serial PRIMARY KEY,
	flight_status flight_status_options NOT NULL DEFAULT 'PENDING',
	air_company_id int,
	departure_country text NOT NULL,
    destination_country text NOT NULL,
    distance int NOT NULL,
    estimated_flight_time int NOT NULL,
    started_at date,
    ended_at: date,
    delay_started_at: date
);