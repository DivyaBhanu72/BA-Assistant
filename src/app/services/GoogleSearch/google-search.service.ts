import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpClient, HttpRequest } from '@angular/common/http';
import { JsonClass } from 'src/app/modules/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchService {
  iscustomSearch=true
  GoogleResults
  combined_result
  iscombined_result=false
  // ={
  //   "Case Studies": {
  //     "https://shareinvesta.com/online-food-ordering-delivery/": "Nov 26, 2018 ... Swiggy, Zomato, and Foodpanda are the top online food ordering and delivery \ncompanies in India. Read to know their busness model.",
  //     "https://uxdesign.cc/ui-ux-case-study-feedme-mobile-app-for-ordering-food-ef0e7f8c82ba": "Dec 19, 2018 ... This case study describes my process of designing the app from the idea ... \npopularity of online food ordering were: lack of time to prepare food, ...",
  //     "https://uxplanet.org/ordering-food-online-a-ux-case-study-c9d82aae7cdf": "May 10, 2019 ... A UX case study on online food ordering app, Swiggy. Major factors that help in \nmaking decisions and place orders."
  //   },
  //   "How Does Online Food Ordering(E-Commerce) works": {
  //     "https://browntape.com/how-to-kick-start-an-online-food-business/": "May 12, 2017 ... Since there is a demand for online food and groceries, you have the liberty to ... \nProcuring eliminates the requirement to do the above, as they are .... it is a ready \nmade online food ordering e-commerce solution with ... How does Amazon's \nseller payments system work – from order to money in the bank.",
  //     "https://en.wikipedia.org/wiki/Menulog": "Menulog Pty. Ltd. is an Australian and New Zealand online food and beverage \nordering app. ... Industry, Online food ordering, e-commerce. Founded, Sydney ... \nMenulog operates in all major Australian states and cities. The company also has\n ...",
  //     "https://www.quora.com/What-are-the-best-online-businesses-and-how-can-I-start-an-online-business": "Here is the best online businesses list and easy way how to start online business. \n1 . ... Ashita Saini, Works at FATbit Technologies (2017-present) ... YoYumm- it is \na ready made online food ordering e-commerce solution with ..."
  //   },
  //   "ONLINE FOOD ORDERING(E-Commerce)": {
  //     "https://en.wikipedia.org/wiki/Menulog": "Menulog Pty. Ltd. is an Australian and New Zealand online food and beverage \nordering app. ... Industry, Online food ordering, e-commerce. Founded, Sydney ...",
  //     "https://github.com/iluxonchik/catshef": "Online food ordering e-commerce application. Contribute to iluxonchik/catshef \ndevelopment by creating an account on GitHub.",
  //     "https://www.livemint.com/Companies/IlkQCq1uXlDPSrA18LAo3M/Foodpanda-raises-Rs150-crore-in-one-year.html": "Aug 31, 2016 ... ... FoodpandafundraisinginvestmentsRocket InternetJade Gmbh and CoZomato\nonline food orderinge-commercestart-upsbusiness news."
  //   },
  //   "Online Food Ordering(E-Commerce) Business Model ": {
  //     "https://smallbizclub.com/startup/creating-a-plan/13-profitable-models-start-food-ordering-business/": "Sep 2, 2016 ... Kitchen service, as well as the online food-ordering platform, can be managed by \nthe food startup itself under this business model. Examples ...",
  //     "https://www.fatbit.com/fab/brilliant-startup-idea-online-office-food-ordering-delivery-business/": "Many follow online food ordering & delivery business model but only a few \nstartups adhere to the office food-delivery business. This is the reason why new ...",
  //     "https://www.quora.com/What-is-the-business-model-of-online-food-ordering-websites": "Lets me answer this in detail ,as i was working on Online food ordering startup ,i \nmet lot of Restaurant owners and they told me the truth under the hood."
  //   },
  //   "Regulation For Online Food Ordering(E-Commerce)": {
  //     "http://news.xinhuanet.com/english/2017-03/15/c_136130899.htm": "Mar 15, 2017 ... Beijing pledges to strengthen regulation of online catering platforms to ... \nAccording to statistics, Beijing has five online food ordering and ...",
  //     "https://www.businesswire.com/news/home/20150716006437/en/Groupon-Acquires-OrderUp-Power-Nationwide-Food-Ordering": "Jul 16, 2015 ... ... operating in nearly 40 markets across the United States (Graphic: Business \nWire) ... “Online food ordering and delivery represents an untapped ... laws and \nregulations, including the CARD Act and regulation of the Internet ...",
  //     "https://www.pymnts.com/news/mobile-payments/2018/online-food-delivery-swiggy-scootsy-restaurants/": "Aug 7, 2018 ... India-based online food ordering and delivery platform Swiggy has reportedly \nspent ... Evidence of that growth comes from the United States, ..."
  //   },
  //   "Top Startups For Online Food Ordering(E-Commerce)": {
  //     "https://washington.startups-list.com/": "Explore top startups in Washington DC ...... recently recognized by Inc. Magazine \nas being the fourth fastest growing media company in the United States.",
  //     "https://www.lenovo.com/pe/es/solutions/smb/can-big-businesses-learn-nimble-tech-startups": "Here we pick out six top startups in Europe and what top executives can learn ... \n2011, its founders intended to turn it into a global online food ordering platform.",
  //     "https://www.spaceotechnologies.com/pizza-delivery-app-development-top-reasons-startups/": "Dec 4, 2018 ... In this image, you can see top startups that have raised money in the ... Talking \nabout the United States, the pizza market was valued at $45.1 billion. ... an on-\ndemand pizza delivery or online food ordering app development ..."
  //   }
  // }
  keys
  // ={
  //   "http://news.xinhuanet.com/english/2017-03/15/c_136130899.htm": "Mar 15, 2017 ... Beijing pledges to strengthen regulation of online catering platforms to ... \nAccording to statistics, Beijing has five online food ordering and ...",
  //   "http://www.clickformeal.com/help": "ClickForMeal.com is the FIRST online food ordering e-commerce portal in Oman \nthat lets internet users easily find restaurants, view their updated menus, read ...",
  //   "http://www.publishingindia.com/atithya/89/to-study-the-inclination-of-consumers-in-baner-area-in-relation-to-the-online-food-ordering/547/3914/": "... Foodpanda.in, Tinyowl.com, Zomato.com) etc. Keywords: Online Food \nOrdering, E-commerce, QSRs, Multi-Restaurant Site, Mobile Apps. View PDF. \nSitelinks.",
  //   "http://www.starmicronics.com/blog/category/promoprnt/": "Uber Eats is an American online food ordering and delivery platform launched .... \nGDPR (or the General Data Protection Regulation) has had implications for \nforeign ... and retailers, and now similar regulations are coming to the United \nStates.",
  //   "https://en.wikipedia.org/wiki/Menulog": "Industry, Online food ordering, e-commerce. Founded, Dan Katz Leon Kamenev \nKevin Sherman Sydney, Australia, 2006. Headquarters, Sydney, New South \nWales. Parent · Just Eat. Website, menulog.com.au. Menulog Pty. Ltd. is an \nAustralian and New Zealand online food and beverage ordering app. ... Menulog \noperates in all major Australian states and cities.",
  //   "https://github.com/iluxonchik/catshef": "Online food ordering e-commerce application. Contribute to iluxonchik/catshef \ndevelopment by creating an account on GitHub.",
  //   "https://smallbizclub.com/startup/creating-a-plan/13-profitable-models-start-food-ordering-business/": "Sep 2, 2016 ... Kitchen service, as well as the online food-ordering platform, can be managed by \nthe food startup itself under this business model. Examples ...",
  //   "https://uxdesign.cc/ui-ux-case-study-feedme-mobile-app-for-ordering-food-ef0e7f8c82ba": "Dec 19, 2018 ... This case study describes my process of designing the app from the idea ... \npopularity of online food ordering were: lack of time to prepare food, ...",
  //   "https://uxplanet.org/ordering-food-online-a-ux-case-study-c9d82aae7cdf": "May 10, 2019 ... A UX case study on online food ordering app, Swiggy. Major factors that help in \nmaking decisions and place orders.",
  //   "https://www.exceptionaire.com/case-study-online-food-ordering-app/": "In today's world, people are always on the move and have less to no time to stop \nand spend time for food or drinks. People prefer to get things done on the go, ...",
  //   "https://www.fatbit.com/fab/brilliant-startup-idea-online-office-food-ordering-delivery-business/": "Many follow online food ordering & delivery business model but only a few \nstartups adhere to the office food-delivery business. This is the reason why new ...",
  //   "https://www.quora.com/What-are-the-top-failed-startups-in-2016": "The Foodpanda group is one of the world's largest online food ordering \nmarketplaces in .... Location: Utah, United States ..... Which top startups failed in \nIndia?",
  //   "https://www.quora.com/What-is-the-business-model-of-online-food-ordering-websites": "Lets me answer this in detail ,as i was working on Online food ordering startup ,i \nmet lot of Restaurant owners and they told me the truth under the hood.",
  //   "https://www.quora.com/What-would-be-the-minimum-investment-if-I-want-to-start-a-food-ordering-site-like-foodpanda-in-India": "A small team with 2 people can work to manage the orders on web. ... with the \nhelp of YoYumm it is a ready made online food ordering e-commerce solution \nwith ...",
  //   "https://www.spaceotechnologies.com/pizza-delivery-app-development-top-reasons-startups/": "Dec 4, 2018 ... In this image, you can see top startups that have raised money in the ... Talking \nabout the United States, the pizza market was valued at $45.1 billion. ... an on-\ndemand pizza delivery or online food ordering app development ...",
  //   "https://www.startupranking.com/top/united-states/57": "The top startups for United States 5601 - 5700 in Startup Ranking featuring \nstartups/companies like TasteSpace, Just Mail, Droidbuddy.me, QuitJuice.com, ...",
  //   "https://www.uscis.gov/sites/default/files/err/D2%20-%20Temporary%20Worker%20in%20a%20Specialty%20Occupation%20or%20Fashion%20Model%20(H-1B)/Decisions_Issued_in_2018/JUN072018_07D2101.pdf": "Jun 7, 2018 ... The Petitioner, an online food-ordering service, seeks to temporarily employ the \n... equivalent) as a minimum for entry into the occupation in the United States. \nThe regulation at 8 C.F.R. § 214.2(h)(4)(ii) largely restates this ..."
  // }

  constructor(private http: HttpClient) { }
  GetResponse(jsondata:JsonClass) {
   

    const request = new HttpRequest('POST', environment.googlesearch + '/Search/',
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
