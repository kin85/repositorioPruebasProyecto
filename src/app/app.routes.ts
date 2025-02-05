import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuestionarioFormComponent } from './cuestionario/cuestionario-form/cuestionario-form.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
{path: 'cuestionario', component: CuestionarioFormComponent}
];
