import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {GoogleSearchLinksService} from '../../services/google-search-links/google-search-links.service'
import { AgWordCloudData } from 'angular4-word-cloud';
import { WordCloudService } from '../../services/word-cloud/word-cloud.service'
import { DomainmodelService } from 'src/app/services/domainmodel/domainmodel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  constructor(public router:Router,public domainmodelService:DomainmodelService) { }
  myInterval:any;
  ngOnInit() {
    this.myInterval= setInterval(() => {
      // console.log('checing');
      if(this.domainmodelService.RecivedItems==null)
      {
        this.domainmodelService.flag=false
        this.domainmodelService.RecivedItems=['insurance', 'policy', 'business', 'coverage', 'company', 'insured', 'claim', 'liability', 'premium', 'loss', 'collision', 'vehicle', 'pay', 'deductible', 'car', 'drive', 'accident', 'damage', 'worth', 'may', 'pension', 'tax', 'life', 'minus', 'basis', 'assurance', 'financial', 'insurer', 'mib', 'driver', 'scheme', 'victim', 'compensation', 'uninsured', 'free', 'please', 'trial', 'read', 'information', 'lawyer', 'here', 'counsel', 'subscription', 'risk', 'payment', 'value', 'paid', 'contract', 'time', 'new', 'nationwide', 'help', 'mutual', 'auto', 'also', 'model', 'customer', 'money', 'make', 'product', 'record', 'fee', 'reinsurance', 'sector', 'high', 'ratio', 'aarp', 'receive', 'legally', 'struck', 'email', 'exclusive', 'smart', 'confirm', 'hitting', 'volunteering']

        console.log("output not received")
      }
      else if(this.domainmodelService.RecivedItems!=null)
      {
        this.domainmodelService.flag=true
        clearInterval(this.myInterval)
      }

    },10000)

  }
  element1:HTMLElement;
  element2:HTMLElement;
  element3:HTMLElement;
  radioelement:HTMLInputElement;
  options = {
    settings: {
      minFontSize: 10,
      maxFontSize: 50,
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    labels: false

  };
  buttonclicked()
  {
    this.router.navigate(['/domainmodel'])
  }
  ontab1click()
  {
     this.element1=document.getElementById('tab11') as HTMLElement;
     this.element1.setAttribute("style", "border-style:outset");
     this.radioelement=<HTMLInputElement> document.getElementById('tab1')
     this.radioelement.checked = true
     this.element2=document.getElementById('tab12') as HTMLElement;
     this.element2.setAttribute("style", "border-style:none");
     this.element3=document.getElementById('tab13') as HTMLElement;
     this.element3.setAttribute("style", "border-style:none");
  }
  ontab2click()
  {
     this.element2=document.getElementById('tab12') as HTMLElement;
     this.element2.setAttribute("style", "border-style:outset");
     this.radioelement=<HTMLInputElement> document.getElementById('tab2')
     this.radioelement.checked = true
     this.element1=document.getElementById('tab11') as HTMLElement;
     this.element1.setAttribute("style", "border-style:none");
     this.element3=document.getElementById('tab13') as HTMLElement;
     this.element3.setAttribute("style", "border-style:none");

  }
  ontab3click()
  {
     this.element3=document.getElementById('tab13') as HTMLElement;
     this.element3.setAttribute("style", "border-style:outset");
     this.radioelement=<HTMLInputElement> document.getElementById('tab3')
     this.radioelement.checked = true
     this.element2=document.getElementById('tab12') as HTMLElement;
     this.element2.setAttribute("style", "border-style:none");
     this.element1=document.getElementById('tab11') as HTMLElement;
     this.element1.setAttribute("style", "border-style:none");
  }

}
