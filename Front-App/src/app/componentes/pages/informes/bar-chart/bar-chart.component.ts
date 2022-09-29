import { Component, Input, ViewChild, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [ './bar-chart.component.css' ],
})
export class BarChartComponent implements OnChanges{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() messagebar: ChartData<'bar'>;

  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: 10
  //     } 
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end'
  //     }
  //   }
  // };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public dataChart: any ={
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }
      // ,
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B2' }
    ]
  };
  public dataChart1: any ={

  };

  public barChartData: ChartData<'bar'> = this.dataChart1 ;

  ngOnChanges(changes: SimpleChanges) {

      this.barChartData= this.messagebar ;

  }

}
