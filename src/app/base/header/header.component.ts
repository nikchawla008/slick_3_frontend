import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {SubmissionService} from "../../services/submission.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public auth: AuthService,
    public submissionService: SubmissionService,
    public toastService: NzMessageService
  ) {
  }

  /**
   * Download survey excel file
   */
  downloadExcel(){
    this.submissionService.downloadExcel().subscribe({
      next: (response) => {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(response)
        link.download = 'data.xlsx'
        link.click();
      },
      error: () => {
        this.toastService.error('Failed to download survey data')
      }
    })

  }

}
