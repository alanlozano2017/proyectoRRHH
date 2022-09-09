import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private renderer: Renderer2) {
  }
  
  ngOnInit(){
    this.addJsToElement('../../../assets/js/tabla_user.js').onload = (teste) => {
      // console.log(teste);
  }
  }
  
  addJsToElement(src: string): HTMLScriptElement {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      this.renderer.appendChild(document.body, script);
      return script;
    }


}
