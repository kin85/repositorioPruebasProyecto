import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {FormArray,FormBuilder,FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { BbddService } from '../../services/BBDD.service';

@Component({
  selector: 'app-cuestionario-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cuestionario-form.component.html',
  styleUrls: ['./cuestionario-form.component.css']
})
export class CuestionarioFormComponent implements OnInit {
  preguntas: string[] = [];
  preCuestionarioForm: FormGroup;

  constructor(private bbddService: BbddService,private formBuilder: FormBuilder) {
    this.preCuestionarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.preguntas = [
      '¿Cuál es tu nivel de experiencia en el campo?',
      '¿Cuántos años has trabajado en esta industria?',
      '¿Qué habilidades específicas has desarrollado en tu carrera?',
      '¿Has trabajado en proyectos similares antes?',
      '¿Qué te motiva a trabajar en este campo?'
    ];
  }

  get strNombreValid() {
    if (this.preCuestionarioForm.get('nombre')?.untouched) {
      return ''
    } else if(this.preCuestionarioForm.get('nombre')?.touched && this.preCuestionarioForm.get('nombre')?.valid){
      return 'is-valid'
    } else {
      return 'is-invalid'
    }
  }

  get strTelefonoValid() {
    if (this.preCuestionarioForm.get('telefono')?.untouched) {
      return ''
    } else if(this.preCuestionarioForm.get('telefono')?.touched && this.preCuestionarioForm.get('telefono')?.valid){
      return 'is-valid'
    } else {
      return 'is-invalid'
    }
  }

  
}

