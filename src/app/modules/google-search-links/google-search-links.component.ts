import { Component, OnInit } from '@angular/core';
import {GoogleSearchLinksService} from '../../services/google-search-links/google-search-links.service'
import { GoogleSearchService } from 'src/app/services/GoogleSearch/google-search.service';
import { DomainmodelService } from 'src/app/services/domainmodel/domainmodel.service';
import { DownloadpdfService } from 'src/app/services/downloadpdf/downloadpdf.service';

@Component({
  selector: 'app-google-search-links',
  templateUrl: './google-search-links.component.html',
  styleUrls: ['./google-search-links.component.css']
})
export class GoogleSearchLinksComponent implements OnInit {

  constructor(public googlesearchlinksservice:GoogleSearchLinksService,public googlecustomsearchservice:GoogleSearchService,public domainmodelservice:DomainmodelService,private downloadpdfservice:DownloadpdfService) { }

  ngOnInit() {
    // console.log(this.googlesearchlinksservice.GoogleLinks)
    this.myInterval= setInterval(() => {
    if(this.googlecustomsearchservice.combined_result!=null)
    {
      this.keys=[];
      this.childkeys=[];
      this.finalchildkeys=[];
   
    // console.log(this.googlecustomsearchservice.combined_result)
    this.keys=Object.keys(this.googlecustomsearchservice.combined_result)
    this.keys.forEach(eachkey=>{

      // console.log(this.googlecustomsearchservice.combined_result[eachkey])
      if(typeof this.googlecustomsearchservice.combined_result[eachkey]==='object' && this.googlecustomsearchservice.combined_result[eachkey]!==null)
      {
        this.childkeys=Object.keys(this.googlecustomsearchservice.combined_result[eachkey])

      }
      this.childkeys.forEach(eachchildkey=>{
        
        this.finalchildkeys.push(eachchildkey)
  
        // console.log(this.googlecustomsearchservice.combined_result[eachkey][eachchildkey])
    })
   
    })
    this.keys.forEach(eachkey=>{
      this.finalchildkeys.forEach(eachchildkey=>{
        console.log(this.googlecustomsearchservice.combined_result[eachkey][eachchildkey])
      })
    })
    
    this.googlecustomsearchservice.iscustomSearch
    }
    else if(this.googlecustomsearchservice.combined_result!=null && this.googlecustomsearchservice
      .iscombined_result==true)
      {
        clearInterval(this.myInterval)
      }
  },5000)
}
  
  keys=[]
  childkeys=[]
  isLoading=true;
  finalchildkeys=[];
  data:any;
  myInterval:any;
  downloadpdf()
  {
   
    this.downloadpdfservice.downloadPDF(this.googlecustomsearchservice.combined_result)
    // this.downloadpdfservice.downloadPDF()

  }



}
