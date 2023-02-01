import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favoritos[];
};

interface Favoritos{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})


export class DinamicosComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;
  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}
  peli : string = "";


  constructor() { }

  ngOnInit(): void {
  }

  
  notValid(campo: string): boolean {
    return this.myForm?.controls[campo]?.invalid &&
           this.myForm?.controls[campo]?.touched
  }

  save() {
    console.log('formulario posteado');
  }

  delete(i: number): void{
    this.persona.favoritos.splice(i,1);
  }

  add(): void{
    if(this.peli){
      
      const favorite:Favoritos = {
        id: this.persona.favoritos.length + 1,
        nombre: this.peli
      }
      this.persona.favoritos.push({...favorite});
      this.peli = "";
    }
  }



}



