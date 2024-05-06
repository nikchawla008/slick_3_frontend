import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }


  getScript1TrainOptions(): Observable<any> {
    return this.http.post(`${environment.backendUrl}/dashboard/train/options`, {}).pipe(
      take(1),
      map((data: any) => data.trainIds)
    )
  }

  getScript1FilledSurveysForTrain(requestBody: any): Observable<any> {
    return this.http.post(`${environment.backendUrl}/dashboard/train/surveys`, requestBody).pipe(
      take(1),
      map((data: any) => data.results)
    )
  }

  getClientDashboardData() {
    return this.http.post(`${environment.backendUrl}/dashboard/script1/summary`, {}).pipe(
      take(1),
      map((data: any) => data.data)
    )
  }

}
