import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

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

  nuevoFavorito : FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  get favoritos(){
    return this.myForm.get('favoritos') as FormArray;
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return 
    }
    this.favoritos.clear()
    this.myForm.reset()
  }

  isValidField(field:string){
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  add(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    this.favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset()
  }

  delete(i: number): void{
    this.favoritos.removeAt(i)
  }



}
