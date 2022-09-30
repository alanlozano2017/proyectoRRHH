
import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: [ './radar-chart.component.css' ]
})
export class RadarChartComponent implements OnChanges, OnInit{
  ngOnInit(): void {
  
  }

  @Input() messageradar: ChartData<'radar'>;
    
  public dataChart1: any ={

  };

  public radarChartData: ChartData<'radar'> = this.dataChart1;
  public radarChartType: ChartType = 'radar';

  ngOnChanges(changes: SimpleChanges) {
 
    this.radarChartData= this.messageradar ;

}
// Radar
public radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  
  scales: {
    
    radial: {
        beginAtZero: true,
        min: 0,
        ticks:{
          //stepSize: 1
        }
        
        
    }
}
};


  // public radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

  // public dataChart: any ={
  //   labels: [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ],
  //   datasets: [
  //     { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' }
  //     ,
  //     { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
      
  //   ]
  // };
  

  // // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   //console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   //console.log(event, active);
  // }
}
