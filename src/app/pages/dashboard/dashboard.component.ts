import { style } from '@angular/animations';
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
    nationality: 'Brazilian',
    tasks: {
      total: 100,
      done: 30
    }
  },
  {
    name: 'Mary',
    age: 25,
    sex: 'Female',
    nationality: 'American',
    tasks: {
      total: 50,
      done: 40
    }
  },
  {
    name: 'Jafari',
    age: 21,
    sex: 'Male',
    nationality: 'South African',
    tasks: {
      total: 80,
      done: 10
    }
  },
  {
    name: 'Haruto',
    age: 35,
    sex: 'Male',
    nationality: 'Japonese',
    tasks: {
      total: 20,
      done: 20
    }
  },
  {
    name: 'Sônia',
    age: 23,
    sex: 'Female',
    nationality: 'Brazilian',
    tasks: {
      total: 30,
      done: 28
    }
  },
  {
    name: 'John',
    age: 21,
    sex: 'Male',
    nationality: 'American',
    tasks: {
      total: 100,
      done: 30
    }
  },
  {
    name: 'Jamal',
    age: 40,
    sex: 'Male',
    nationality: 'South African',
    tasks: {
      total: 26,
      done: 15
    }
  },
  {
    name: 'Sakura',
    age: 36,
    sex: 'Female',
    nationality: 'Japonese',
    tasks: {
      total: 34,
      done: 18
    }
  }];

  // UserChart
  myChart: Chart;
  myChartConfig: ChartConfiguration = {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: 'Age',
        backgroundColor: 'rgba(153, 102, 255)',
        borderColor: 'rgb(153, 102, 255)',
        data: []
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    var myChartCanvas = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(
      myChartCanvas,
      this.myChartConfig
    );

    this.lstUser.forEach(entUser => {
      this.myChartConfig.data.labels.push(entUser.name);
      this.myChartConfig.data.datasets[0].data.push(entUser.age)
    });

    this.myChart.update();

    document.getElementById('user-table').style.height = myChartCanvas.height.toString() + 'px';
  }


  MenPercentage() {
    let totalUsers = this.lstUser.length;
    let menUsers = this.lstUser.filter(x => x.sex == 'Male').length;
    
    return ((menUsers * 100) / totalUsers)
  }
  
  WomenPercentage() {
    let totalUsers = this.lstUser.length;
    let womenUsers = this.lstUser.filter(x => x.sex == 'Female').length;

    return ((womenUsers * 100) / totalUsers)
  }

  AverageAgeUsers() {
    var sumAge = 0;

    this.lstUser.forEach(entUser => {
      sumAge += entUser.age;
    });

    return (sumAge / this.lstUser.length).toFixed();
  }

}
