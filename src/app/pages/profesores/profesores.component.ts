import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColegioservicesService } from 'src/app/services/colegioservices.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  
  profesores: any[] = [];
  profesoresBusuqeda: any[] = [];
  profesoresBckup: any[] = [];
  constructor(private colegioServie: ColegioservicesService,private router: Router) { }

  ngOnInit(): void {
   this.consultaServiceColegio();
  }


  consultaServiceColegio(): any[]{
    this.colegioServie.getProfesores().subscribe(profesores => {
      console.log({profesores}); 
      this.profesores = profesores;
      console.log(this.profesores);
    });
    return this.profesores;
  }

  verProfe(idx: number) {
    console.log(idx)
    this.router.navigate(['/profesor',idx])
  }
  

  buscarProfesores(texto:string){ 
    texto = texto.toLocaleLowerCase();
    this.profesoresBusuqeda = []; 
    for(let profe of this.profesores){
        let nombre = profe.nombreProfesor.toLocaleLowerCase();
        if (nombre.indexOf(texto) >= 0 ){
          this.profesoresBusuqeda.push(profe)
        }              
    }
    this.profesores = this.profesoresBusuqeda;
  }

  limpiar(){
    this.profesores = this.consultaServiceColegio();
  }

}
