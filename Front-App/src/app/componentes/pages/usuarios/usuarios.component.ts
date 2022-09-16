import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit(){
    this.loadScript('./assets/js/tabla_user.js');
  }
  
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


}
