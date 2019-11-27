import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpClient, HttpRequest } from '@angular/common/http';
import { JsonClass } from 'src/app/modules/dashboard/dashboard.component';
import { saveAs } from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class DownloadpdfService {

  constructor(private http: HttpClient) { }
  GetResponse()
  {
    const request = new HttpRequest('GET', environment.downloadpdf + '/downloadfile/',
    {
     
    },
    {
      reportProgress: true
    });

    // console.log(request);
    return this.http.request(request);
  }
  public downloadPDF(data:any): any {
    var mediaType = 'application/pdf';
    this.http.post(environment.downloadpdf + '/downloadfile/', {location: "report.pdf",data}, { responseType: 'blob',params:data }).subscribe(
        (response) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'report.pdf');
        });
}
  }

