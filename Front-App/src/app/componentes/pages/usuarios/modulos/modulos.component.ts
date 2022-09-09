import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

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
