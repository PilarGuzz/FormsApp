import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  notValidNAme(): boolean{
    return this.myForm?.controls['nombre']?.invalid && 
        this.myForm?.controls['nombre']?.touched
  }
  save(){
  console.log("saved");

  }

}

