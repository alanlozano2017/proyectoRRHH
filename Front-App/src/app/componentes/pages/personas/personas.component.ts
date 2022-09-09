import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
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
