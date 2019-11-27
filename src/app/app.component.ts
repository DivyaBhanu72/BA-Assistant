import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { AuthService } from '../app/services/auth/auth.service';
import { DownloadpdfService } from './services/downloadpdf/downloadpdf.service';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BA-Assistant';
  data:any
  constructor(private adal : AuthService , private adaljs : AdalService,private downloadpdfservice:DownloadpdfService)
  {

  }
  ngOnInit() {
  
  //   this.downloadpdfservice.GetResponse().subscribe(event=>{
  //     if(event.type === HttpEventType.Response)
  //     {
  //      console.log(event.ok)
       
  //   }
  // })
  this.data={
    "http://news.xinhuanet.com/english/2017-03/15/c_136130899.htm": "Mar 15, 2017 ... Beijing pledges to strengthen regulation of online catering platforms to ... \nAccording to statistics, Beijing has five online food ordering and ...",
    "http://www.clickformeal.com/help": "ClickForMeal.com is the FIRST online food ordering e-commerce portal in Oman \nthat lets internet users easily find restaurants, view their updated menus, read ...",
    "http://www.publishingindia.com/atithya/89/to-study-the-inclination-of-consumers-in-baner-area-in-relation-to-the-online-food-ordering/547/3914/": "... Foodpanda.in, Tinyowl.com, Zomato.com) etc. Keywords: Online Food \nOrdering, E-commerce, QSRs, Multi-Restaurant Site, Mobile Apps. View PDF. \nSitelinks.",
    "http://www.starmicronics.com/blog/category/promoprnt/": "Uber Eats is an American online food ordering and delivery platform launched .... \nGDPR (or the General Data Protection Regulation) has had implications for \nforeign ... and retailers, and now similar regulations are coming to the United \nStates.",
    "https://en.wikipedia.org/wiki/Menulog": "Industry, Online food ordering, e-commerce. Founded, Dan Katz Leon Kamenev \nKevin Sherman Sydney, Australia, 2006. Headquarters, Sydney, New South \nWales. Parent · Just Eat. Website, menulog.com.au. Menulog Pty. Ltd. is an \nAustralian and New Zealand online food and beverage ordering app. ... Menulog \noperates in all major Australian states and cities.",
    "https://github.com/iluxonchik/catshef": "Online food ordering e-commerce application. Contribute to iluxonchik/catshef \ndevelopment by creating an account on GitHub.",
    "https://smallbizclub.com/startup/creating-a-plan/13-profitable-models-start-food-ordering-business/": "Sep 2, 2016 ... Kitchen service, as well as the online food-ordering platform, can be managed by \nthe food startup itself under this business model. Examples ...",
    "https://uxdesign.cc/ui-ux-case-study-feedme-mobile-app-for-ordering-food-ef0e7f8c82ba": "Dec 19, 2018 ... This case study describes my process of designing the app from the idea ... \npopularity of online food ordering were: lack of time to prepare food, ...",
    "https://uxplanet.org/ordering-food-online-a-ux-case-study-c9d82aae7cdf": "May 10, 2019 ... A UX case study on online food ordering app, Swiggy. Major factors that help in \nmaking decisions and place orders.",
    "https://www.exceptionaire.com/case-study-online-food-ordering-app/": "In today's world, people are always on the move and have less to no time to stop \nand spend time for food or drinks. People prefer to get things done on the go, ...",
    "https://www.fatbit.com/fab/brilliant-startup-idea-online-office-food-ordering-delivery-business/": "Many follow online food ordering & delivery business model but only a few \nstartups adhere to the office food-delivery business. This is the reason why new ...",
    "https://www.quora.com/What-are-the-top-failed-startups-in-2016": "The Foodpanda group is one of the world's largest online food ordering \nmarketplaces in .... Location: Utah, United States ..... Which top startups failed in \nIndia?",
    "https://www.quora.com/What-is-the-business-model-of-online-food-ordering-websites": "Lets me answer this in detail ,as i was working on Online food ordering startup ,i \nmet lot of Restaurant owners and they told me the truth under the hood.",
    "https://www.quora.com/What-would-be-the-minimum-investment-if-I-want-to-start-a-food-ordering-site-like-foodpanda-in-India": "A small team with 2 people can work to manage the orders on web. ... with the \nhelp of YoYumm it is a ready made online food ordering e-commerce solution \nwith ...",
    "https://www.spaceotechnologies.com/pizza-delivery-app-development-top-reasons-startups/": "Dec 4, 2018 ... In this image, you can see top startups that have raised money in the ... Talking \nabout the United States, the pizza market was valued at $45.1 billion. ... an on-\ndemand pizza delivery or online food ordering app development ...",
    "https://www.startupranking.com/top/united-states/57": "The top startups for United States 5601 - 5700 in Startup Ranking featuring \nstartups/companies like TasteSpace, Just Mail, Droidbuddy.me, QuitJuice.com, ...",
    "https://www.uscis.gov/sites/default/files/err/D2%20-%20Temporary%20Worker%20in%20a%20Specialty%20Occupation%20or%20Fashion%20Model%20(H-1B)/Decisions_Issued_in_2018/JUN072018_07D2101.pdf": "Jun 7, 2018 ... The Petitioner, an online food-ordering service, seeks to temporarily employ the \n... equivalent) as a minimum for entry into the occupation in the United States. \nThe regulation at 8 C.F.R. § 214.2(h)(4)(ii) largely restates this ..."
  
}
  // this.downloadpdfservice.downloadPDF(this.data)
}
  
  LogOut()
  {
    // this.adaljs.logOut();
  }
}
