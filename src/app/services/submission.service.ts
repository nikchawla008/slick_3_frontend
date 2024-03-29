import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {firstValueFrom, Observable, take} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(
    public http: HttpClient
  ) { }

  submitForm(body: any) {
    return this.http.post(`${environment.backendUrl}/survey/submit`, body).pipe(
      take(1)
    )
  }

  /**
   * [GET] API to download Survey data excel
   */
  downloadExcel(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/xlsx',
        'Content-Type': 'application/xlsx'
      }),
      responseType: 'blob' as 'json'
    };
    return this.http.get(`${environment.backendUrl}/survey/fetch/all/data`, httpOptions).pipe(
      take(1)
    )
  }

  /**
   * Convert blob to base64 string
   * @param blob Blob
   */
  async convertBlobToBase64(blob: Blob | null) {
    if(blob) {
      const obs = new Observable<string>((observer) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          observer.next(reader.result as string);
          observer.complete();
        };

        reader.onerror = (error) => {
          observer.error(error);
        };

        reader.readAsDataURL(blob);
      });
      return firstValueFrom(obs).then(response => {
        return response
      })
    }
    return new Promise<string>(resolve => resolve(''))

  }



}
