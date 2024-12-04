import { Routes } from '@angular/router';
import { CountriesService } from './services/countries/countries.service';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesResolver } from './resolvers/countries/countries.resolver';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{
    path: 'countries',
    component: CountriesComponent,
    resolve: {countries: CountriesResolver}
},{
    path: '',
    component: HomeComponent
}];
