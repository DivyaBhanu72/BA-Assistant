import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpClient, HttpRequest } from '@angular/common/http';
import { JsonClass } from 'src/app/modules/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DomainmodelService {
  RecivedItems;
  flag=false
  constructor(private http: HttpClient) { }
  GetListOfItens(jsondata:JsonClass) {
   

    const request = new HttpRequest('POST', environment.google_search_links + '/GoogleSearch/',
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
