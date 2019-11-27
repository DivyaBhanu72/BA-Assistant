import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpClient, HttpRequest } from '@angular/common/http';
import { JsonClass, DomainModelClass } from 'src/app/modules/dashboard/dashboard.component';
// import { saveAs } from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class DomainmodelsearchService {

  constructor(private http: HttpClient) { }

  GetResponse(domainmodel:DomainModelClass)
  {
    const request = new HttpRequest('POST', environment.domainmodelsearch + '/DEsearch/',
    {
     domainmodel
    },
    {
      reportProgress: true
    });

    // console.log(request);
    return this.http.request(request);
  }
}
