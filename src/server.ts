import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import AirplanesRoute from '@routes/airplanes.route';
import CompaniesRoute from '@routes/companies.route';
import FlightsRoute from '@routes/flights.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App(
    [
        new IndexRoute(), 
        new UsersRoute(), 
        new AuthRoute(), 
        new CompaniesRoute(), 
        new AirplanesRoute(),
        new FlightsRoute()
    ]
);

app.listen();
