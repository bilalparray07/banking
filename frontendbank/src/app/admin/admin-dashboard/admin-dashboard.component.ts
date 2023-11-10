import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.BarChart();
    this.PieChart();
  }
  barChart: any = []
  BarChart(): void {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Saving', 'Current', 'Fixed', 'Salary', 'Student', 'Business'],
        datasets: [
          {
            label: 'No. Of Customers',
            data: [35, 19, 3, 50, 30, 13],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]

      },
      options: {
        scales: {
          y: {
            type: 'linear', // Ensure you have 'linear' here
            position: 'left',
            beginAtZero: true,
          },
        },
      },
    });
  }
  pieChart:any=[]
  PieChart(){
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Monthly',  'Yearly',  'Total'],
        datasets: [
          {
            label: 'No. of Customers',
            data: [19, 16, 15],
            backgroundColor: [
              '#2ed8b6',
              '#FFB64D',
              '#FF5370',
            ],
            borderColor: [
              '#2ed8b6',
              '#FFB64D',
              '#FF5370',
            ],
            borderWidth: 1
          }]
      },
      options: {
        scales: {
          y: {
            type: 'linear', // Ensure you have 'linear' here
            position: 'left',
            beginAtZero: true,
          },
        },
      },
    });
  }
}
