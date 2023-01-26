import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  template : string[] = ['basicos', 'dinamicos', 'directives', 'switches'];
  reactive : string[] = ['basicos', 'dinamicos', 'switches'];


  constructor() { }

  ngOnInit(): void {
  }

}
