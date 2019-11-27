import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { JsonClass } from 'src/app/modules/dashboard/dashboard.component';
import {AgWordCloudData} from 'angular4-word-cloud';


@Injectable({
  providedIn: 'root'
})
export class WordCloudService {

  constructor(private http: HttpClient) { }
  wordData: Array<AgWordCloudData>=[]
  wordcloudresponse
  flag=true
  url

  GetWorldCloudResponse(jsondata:JsonClass) {
   

    const request = new HttpRequest('POST', environment.glossaryNouns + '/GlossaryNouns/',
    {
      jsondata
    },
    {
      reportProgress: true
    });

    // console.log(request);
    return this.http.request(request);
  }
}
