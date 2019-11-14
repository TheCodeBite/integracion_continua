import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integracionContinua';
  
  numero2 = 0;
  numero1 = 0;
  resultado = ""
  sumar(){
    console.log("numeros: " + this.numero1 + " + " + this.numero2);
    this.resultado = "resultado es " + (this.numero1 + this.numero2)
  }
}
