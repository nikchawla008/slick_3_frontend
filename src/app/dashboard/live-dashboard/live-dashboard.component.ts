import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {NzMessageService} from "ng-zorro-antd/message";

interface SurveyData {
  name: string,
  email: string,
  seatNumber: string,
  coachNumber: string,
  userPNR: string,
  contactNumber: string
}

@Component({
  selector: 'app-live-dashboard',
  templateUrl: './live-dashboard.component.html',
  styleUrls: ['./live-dashboard.component.scss']
})
export class LiveDashboardComponent implements OnInit {

  trains: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ]
  trainId: null | string = null;
  submittedSurveys: SurveyData[] = []

  constructor(
    private dashboardService: DashboardService,
    public toastService: NzMessageService,
  ) {
  }

  ngOnInit() {
    this.getTrainOptions()
  }

  getTrainOptions() {
    this.dashboardService.getScript1TrainOptions().subscribe({
      next: (response) => {
        this.trains = response;
      },
      error: (err) => {
        console.log(err)
        this.toastService.error(err)
      }
    })
  }

  onTrainChange(event: any) {
    if(this.trainId) {
      const requestBody = {
        trainId: this.trainId,
      }
      this.submittedSurveys = []
      this.dashboardService.getScript1FilledSurveysForTrain(requestBody).subscribe({
        next: (response) => {
          this.submittedSurveys = response
          console.log(response)
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

}
