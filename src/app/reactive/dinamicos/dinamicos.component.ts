import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  myForm: FormGroup = this.fb.group({
    //validacion sincrona
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Suzuki', Validators.required],
      ['Yamaha']
    ])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return 
    }
   
    console.log(this.myForm.value)
  }

  isValidField(field:string){
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }


}
