import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informe-persona',
  templateUrl: './informe-persona.component.html',
  styleUrls: ['./informe-persona.component.css']
})
export class InformePersonaComponent implements OnInit {


  messageBar1 ={
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }
      // ,
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series AAAA' }
    ]
  };
  
  messagePolar2 ={
    labels: [ 'Download Saleeeee', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ],
    datasets: [ {
      data: [ 300, 500, 100, 40, 120 ]
    } ]
  };
  
  messagePie3 ={
    labels: [ [ 'Downloadddddddd', 'Sal' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  
  messageRadar4 ={
    labels: [ 'Eat', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ],
    datasets: [
      { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series AAAAAA' }
      ,
      { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
      
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
  
  