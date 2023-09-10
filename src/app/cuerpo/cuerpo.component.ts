import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  ISO_27001:boolean = true; 
  ISO_17799:boolean = false;
  COBIT:boolean = false;
  NIST:boolean = false;
  ITIL:boolean = false;

}
