import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
    selector: 'app-home',
    imports: [MatButtonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true
})

export class HomeComponent {
    title = 'Tarea_4';

    constructor(private router: Router){
    
    };
    goToCountries() {
        this.router.navigate(['/countries'])
    }
}
