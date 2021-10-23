import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lstUser: any[] = [{
    name: 'João',
    age: 30,
    sex: 'Male',
    nationality: 'Brazilian'
  },
  {
    name: 'Mary',
    age: 25,
    sex: 'Fame',
    nationality: 'American'
  },
  {
    name: 'Jafari',
    age: 21,
    sex: 'Male',
    nationality: 'South African'
  },
  {
    name: 'Haruto',
    age: 35,
    sex: 'Male',
    nationality: 'Japonese'
  },
  {
    name: 'Sônia',
    age: 23,
    sex: 'Fame',
    nationality: 'Brazilian'
  },
  {
    name: 'John',
    age: 21,
    sex: 'Male',
    nationality: 'American'
  },
  {
    name: 'Jamal',
    age: 40,
    sex: 'Male',
    nationality: 'South African'
  },
  {
    name: 'Sakura',
    age: 36,
    sex: 'Fame',
    nationality: 'Japonese'
  }];

  // UserChart
  myChart: Chart;
  labels = [];
  data = {
    labels: this.labels,
    datasets: [{
      label: 'User Age',
      backgroundColor: 'rgba(153, 102, 255)',
      borderColor: 'rgb(153, 102, 255)',
      data: [],
    }]
  };
  config: ChartConfiguration = {
    type: "line",
    data: this.data,
    options: {}
  };

  constructor() { }

  ngOnInit(): void {
    var myChartCanvas = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(
      myChartCanvas,
      this.config
    );

    this.lstUser.forEach(entUser => {
      this.labels.push(entUser.name);
      this.data.datasets[0].data.push(entUser.age)
    });

    this.myChart.update();

    document.getElementById('user-table').style.height = myChartCanvas.height.toString() + 'px !important';
    console.log(document.getElementById('user-table').style.height)
    console.log(myChartCanvas)
  }

  AverageAgeUsers() {
    var sumAge = 0;

    this.lstUser.forEach(entUser => {
      sumAge += entUser.age;
    });

    return (sumAge / this.lstUser.length).toFixed();
  }

}
