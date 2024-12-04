import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesService } from '../../services/countries/countries.service';

@Injectable({
    providedIn: 'root',
})
export class CountriesResolver implements Resolve<any> {
    constructor(private countriesService: CountriesService) {}

    resolve(): Observable<any> {
        return this.countriesService.getAllCountries();
    }
}