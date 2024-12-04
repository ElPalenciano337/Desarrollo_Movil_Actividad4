import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterCountriesPipe } from '../../pipes/filtered.countries.pipe';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-countries',
    imports: [MatButtonModule, MatCardModule, CommonModule, MatFormFieldModule, FilterCountriesPipe, FormsModule, MatInputModule],
    templateUrl: './countries.component.html',
    styleUrl: './countries.component.css',
    standalone: true
})

export class CountriesComponent implements OnInit {
    countries: any[''];
    searchText = "";
    
    constructor(private route: ActivatedRoute){
        
    }
    ngOnInit(): void {
        this.countries = this.route.snapshot.data['countries'] || [];
    }

    title = 'Tarea_4';
}
