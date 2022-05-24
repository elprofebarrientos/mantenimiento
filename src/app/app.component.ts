import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 resultado!: string;

 ingresoForm = new FormGroup({
   documento: new FormControl('',[Validators.required, Validators.minLength(8)])
 });

 submit(){
  if(this.ingresoForm.valid)
    this.resultado="Todos los datos validos";
  
  else
    this.resultado="Hay datos invalidos";
  
}
}

