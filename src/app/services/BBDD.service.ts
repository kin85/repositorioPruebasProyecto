import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Importa el archivo de environment

@Injectable({
  providedIn: 'root'
})
export class BbddService {
  
  private apiUrl = environment.apiUrl; // Usa la URL de la API desde environment

  constructor(private http: HttpClient) {}

  getDataObservable<T>(endpoint: string, params?: any): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${endpoint}`, { params, headers: { 'Content-Type': 'application/json' } });
  }

  getCuestionarios(): Observable<any[]> {
    return this.getDataObservable<any[]>('cuestionarios');
  }

  getCuestionarioById(id: number): Observable<any> {
    return this.getDataObservable<any>(`cuestionarios/id/${id}`);
  }
}