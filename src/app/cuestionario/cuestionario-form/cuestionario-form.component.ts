import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BbddService } from '../../services/BBDD.service';

@Component({
  selector: 'app-cuestionario-form',
  imports: [CommonModule],
  templateUrl: './cuestionario-form.component.html',
  styleUrls: ['./cuestionario-form.component.css']
})
export class CuestionarioFormComponent implements OnInit {

  public cuestionario: any;
  public preguntas: any[] = [];

  constructor(private bbddService: BbddService) {}

  ngOnInit() {
    const id = 1; 
    this.bbddService.getCuestionarioById(id).subscribe(data => {
      this.cuestionario = data;
      this.preguntas = data.preguntas;
    });
  }
}