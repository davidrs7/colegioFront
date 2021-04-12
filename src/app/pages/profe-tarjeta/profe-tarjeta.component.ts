import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profe-tarjeta',
  templateUrl: './profe-tarjeta.component.html',
  styleUrls: ['./profe-tarjeta.component.css']
})
export class ProfeTarjetaComponent implements OnInit {
  vermas: boolean= true;
  vermenos: boolean= false;

  @Input() profe: any = {};
  @Input() IdProfe: any = {};
  @Output() profeSeleccionado: EventEmitter<number>
  

  constructor() {
    this.profeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }
  verAsignacion(){ 
    this.vermas = false; 
    this.vermenos = true; 

     }
     vermenosB(){ 
      this.vermenos = false; 
      this.vermas = true;
       }
}
