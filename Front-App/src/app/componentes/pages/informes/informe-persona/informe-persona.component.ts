import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informe-persona',
  templateUrl: './informe-persona.component.html',
  styleUrls: ['./informe-persona.component.css']
})
export class InformePersonaComponent implements OnInit {


  messageBar1 ={
    labels: [ 'Puntualidad', 'Compañerísmo', 'Presentación Pers', 'Cumplimiento Normas', 'Aplicación Procesos', 'Responsabilidad', 'Iniciativa' ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }
      // ,
      { data: [ 9, 7, 8, 9, 5, 6, 7 ], label: 'Calificación global' ,
      backgroundColor: ['rgba(90, 228, 236, 1)']
      }
    ]
  };
  messageBar2 ={
    labels: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7','h8', 'h9', 'h10' ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }
      // ,
      { data: [ 3, 2, 4, 3, 2, 4, 1, 5, 3, 2 ], label: 'Habilidades blandas Promedio' }
    ]
  };
  messageBar3 ={
    labels: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7','h8', 'h9', 'h10' ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }
      // ,
      { data: [ 3, 2, 4, 3, 2, 4, 1, 5, 3, 2 ], label: 'Habilidades blandas Promedio' ,
      backgroundColor: ['rgba(94, 208, 58, 1)']
      }
      ,
      { data: [ 1, 3, 2, 4, 1, 1, 3, 4, 5, 3 ], label: 'Habilidades Duras Promedio' 
      // ,
      // backgroundColor: ['rgba(94, 208, 58, 1)']
      }
    ]
  };
  messagePolar2 ={
    labels: [ 'Download Saleeeee', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ],
    datasets: [ {
      data: [ 300, 500, 100, 40, 120 ]
    } ]
  };
  
  messagePie3 ={
    // labels: [ [ 'Puestos Cubiertos', 'Sal' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    labels: [ [ 'Puestos Cubiertos'], [ 'Puestos Vacantes'] ],

    datasets: [ {
      data: [ 50, 6 ]
    } ]
  };
  messagePie4 ={
    // labels: [ [ 'Puestos Cubiertos', 'Sal' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    labels: [ [ 'Calificación Buena'], [ 'Calificación Media'] , [ 'Calificación Mala'] ],

    datasets: [ {
      data: [ 30, 20, 5 ],
      backgroundColor: ['rgba(94, 208, 58, 1)', 'rgba(246, 253, 112, 1)', 'rgba(255, 55, 55, 1)']
    } ]
  };

  messagePie5 ={
    // labels: [ [ 'Puestos Cubiertos', 'Sal' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    labels: [ [ 'Estudios universitarios'],  [ 'Cursos'] , [ 'Secundario'] , [ 'Secundario Incompleto'] ],

    datasets: [ {
      data: [ 10, 20, 30, 10 ],
      backgroundColor: ['rgba(94, 208, 58, 1)', 'rgba(90, 228, 236, 1)', 'rgba(246, 253, 112, 1)', 'rgba(255, 55, 55, 1)']
    } ]
  };
  
  messageRadar4 ={
    labels: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7','h8', 'h9', 'h10' ],
    datasets: [
      { data: [ 3, 1, 4, 1, 5, 3, 2, 3, 2, 4 ], label: 'Hb Empleado x' }
      ,
      { data: [ 3, 2, 4, 3, 2, 4, 1, 5, 3, 2 ], label: 'Habilidades blandas Puesto' }

    ]
  };
  messageRadar5 ={
    labels: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7','h8', 'h9', 'h10' ],
    datasets: [
      { data: [ 3, 4, 5, 3, 1, 3, 2, 4, 1, 1 ], label: 'Hb Empleado x' }
      ,
      { data: [ 1, 3, 2, 4, 1, 1, 3, 4, 5, 3 ], label: 'Habilidades Duras Puesto' }

    ]
  };
    
  
  
    ngOnInit(): void {
      (function()
        {
          if( window.localStorage )
          {
            if( !localStorage.getItem('firstLoad') )
            {
              localStorage['firstLoad'] = true;
              window.location.reload();
            }  
            else
              localStorage.removeItem('firstLoad');
          }
        })();
  
        
    }
    
    MostrarGrafico: FormGroup;
  
      constructor(fb: FormBuilder)
      {
          this.MostrarGrafico = fb.group({
              name: [""]
          });
          
      }
  
    submitted1 = false;
    submitted2 = false;
    submitted3 = false;
    submitted4 = false;
  
    onSubmit(event: any){
      if( event.submitter.name == "bar" )
      { console.log('bar'); 
      this.submitted1 = true;
      this.submitted2 = false;
      this.submitted3 = false;
      this.submitted4 = false;
      
      }
      else if( event.submitter.name == "area")
      { console.log('area'); 
      this.submitted1 = false;
      this.submitted2 = true;
      this.submitted3 = false;
      this.submitted4 = false;
  
      }
  
      else if( event.submitter.name == "pie")
      { console.log('pie'); 
      this.submitted1 = false;
      this.submitted2 = false;
      this.submitted3 = true;
      this.submitted4 = false;
  
      }
      else if( event.submitter.name == "radar")
      { console.log('radar'); 
      this.submitted1 = false;
      this.submitted2 = false;
      this.submitted3 = false;
      this.submitted4 = true;
  
      }
     }
  
  }
  
  