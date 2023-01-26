import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


/*
*ngIf="myForm.controls['nombre']?.invalid"
del formulario, se accede a controles que son los imputs del form
el ? es para queintente acceder a esa propiedad SOLO si esta definida
para que no salgan errores en la consola al intentar cargarlo antes de que exista
*/
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

//Permite ver una propiedad del HTML, debe estar definida con '#' en el html
//no tiene porque llamarse igual en el componente
  @ViewChild('myForm') myForm!: NgForm;

//    [(ngModel)] = "initForm.nombre"
//vincula el campo del html con la propiedad en TS
  initForm = {
    nombre: "Tomates",
    precio: 2.50,
    existencias: 1 
  }

  constructor() { }

  ngOnInit(): void {
  }

  notValidNAme(): boolean{
    return this.myForm?.controls['nombre']?.invalid && 
        this.myForm?.controls['nombre']?.touched
  }

  notValidPrice(): boolean{
    return this.myForm?.controls['precio']?.invalid && 
        this.myForm?.controls['precio']?.touched
  }

  notValidExistencias(): boolean{
    return this.myForm?.controls['existencias']?.invalid && 
        this.myForm?.controls['existencias']?.touched
  }


  save(){
    //en html crea el elemento myForm y te devuelve el formulario del 
    //del tipo que hayamos creado en el html
    //podemos acceder a propiedades
    //hay que poner los tags name para acceder a sus values.
    
  this.myForm.resetForm();

  }
}
