import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  basicOptions: any
  pieChartOptions: any

  q1Data: any
  q3Data: any
  q4Data: any
  q5Data: any

  constructor(
    private dashboardService: DashboardService,
    public toastService: NzMessageService,
  ) {
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.pieChartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

    this.getDashboardData()
  }

  getDashboardData() {
    this.dashboardService.getClientDashboardData().subscribe({
      next: (response) => {
        const q1 = response.travelRatioResults
        this.q1Data = this.generateData(['Business / Official','Social Purpose','Sight Seeing/Pilgrimage','Others',], Object.values(q1), 'Q1')

        const q3 = response.foodRatioResults
        this.q3Data = this.generateData(['Vegetarian','Satvik/Jain','Vegan','Non-vegetarian','Eggetarian',], Object.values(q3), 'Q3')


        const q4 = response.ageRatioResults
        this.q4Data = this.generateData(['18-25','26-40','41-60','61 or more',], Object.values(q4), 'Q4')

        const q5 = response.genderRatioResults
        this.q5Data = this.generateData(['Males', 'Females', 'Trans',], Object.values(q5), 'Q5')
      }
    })
  }

  generateData(labels: string[], data: number[], question: string) {
    const backgroundColors = ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)']
    const borderColors = ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)']

    return {
      labels: labels,
      datasets: [{
        label: question,
        data: data,
        backgroundColor: backgroundColors.slice(0, data.length),
        borderColor: borderColors.slice(0, data.length),
        borderWidth: 1,
      }]
    }


  }

}
