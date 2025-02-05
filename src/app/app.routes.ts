import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuestionarioFormComponent } from './cuestionario/cuestionario-form/cuestionario-form.component';
import { InicioComponent } from './cuestionario/inicio/inicio.component';
import { DocumentosComponent } from './cuestionario/documentos/documentos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
{path: 'inicio', component: InicioComponent},
{path: 'cuestionario', component: CuestionarioFormComponent},
{path: 'documentos', component: DocumentosComponent}
];
