
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: [ './polar-area-chart.component.css' ]
})
export class PolarAreaChartComponent implements OnChanges {

  @Input() messagepolar: ChartData<'polarArea'>;

  ngOnChanges(changes: SimpleChanges) {

      
    this.polarAreaChartData= this.messagepolar ;

}

public dataChart1: any ={

};

public polarAreaChartData: ChartData<'polarArea'> = this.dataChart1;
public polarAreaLegend = true;

public polarAreaChartType: ChartType = 'polarArea';
  
  // PolarArea
  // public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  // public dataChart: any ={
  //   labels: [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ],
  //   datasets: [ {
  //     data: [ 300, 500, 100, 40, 120 ]
  //   } ]
  // };


  // // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   //console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   //console.log(event, active);
  // }
}
