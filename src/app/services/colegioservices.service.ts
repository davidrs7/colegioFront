import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColegioservicesService {
  profesores: any[] = [];
  baseUrl = environment.baseUrl;  
  constructor(private http:HttpClient) { }

getQuery(query: string){
  const url = this.baseUrl + query
  return this.http.get<any>(url);
}

getProfesores(){ 
  return this.getQuery('profesores')
  .pipe(
    map((resp:any[]) => {
      return resp.map( profesores => {
          this,profesores = profesores;
          return profesores;
      } )
    })
  ); 
} 

}
