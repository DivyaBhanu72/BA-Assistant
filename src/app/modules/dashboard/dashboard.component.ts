import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../services/Countries/countries.service'
import {GoogleSearchService} from '../../services/GoogleSearch/google-search.service'
import { HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {WordCloudService} from '../../services/word-cloud/word-cloud.service'
import { AgWordCloudData } from 'angular4-word-cloud';
import { Router } from '@angular/router';
import{GoogleSearchLinksService} from '../../services/google-search-links/google-search-links.service'
import { DomainmodelService } from 'src/app/services/domainmodel/domainmodel.service';
import { DomainmodelsearchService } from 'src/app/services/domainmodelsearch/domainmodelsearch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public countriesService:CountriesService ,public domainmodelsearchservice:DomainmodelsearchService, public googlesearch:GoogleSearchService,public ngxLoader: NgxUiLoaderService,public wordcloudservice:WordCloudService,public router: Router,public googlesearchlinksservice:GoogleSearchLinksService,public domainmodelService:DomainmodelService) { }
  Countries=[]
  countries='India'
  jsonclass=new JsonClass()
  formSubmitted=true
  response
  keys=[]
  name = 'NGX-UI-LOADER';
  word:AgWordCloudData;
  domainclassobject = new DomainModelClass()
  cnt=0;
  old_search_result:any
  new_search_result:any;
  combined_result:any;

  ngOnInit() {
    this.Countries=this.countriesService.Countries
    // this.keys=Object.keys(this.googlesearch.GoogleResults)
    // this.keys.forEach(key=>{
    //   console.log(this.googlesearch.GoogleResults[key])
    // })
  }
  
  onClickSubmit(data,baassist:NgForm) {
    // console.log(baassist.form);
    this.ngxLoader.start()
    // console.log(baassist.errors);
    baassist.form.setErrors(null);
    // console.log(baassist.errors);
    console.log(baassist.form);
    this.jsonclass =  new JsonClass()
     this.jsonclass.domain=data.domain
     this.jsonclass.sub_domain=data.sub_domain
     this.jsonclass.country=data.country
     
     console.log((this.jsonclass))
     
     if(this.googlesearch.iscustomSearch==false)
     {
     this.googlesearchlinksservice.GetResponse(this.jsonclass).subscribe(event=>{
       
      if (event.type === HttpEventType.Response) {
                this.googlesearchlinksservice.GoogleLinks=event.body
                // this.ngxLoader.stop()
               
      }
     })
    }
    else if(this.googlesearch.iscustomSearch==true)
    {
      // this.googlesearch.keys=Object.keys(this.googlesearch.GoogleResults)

     this.googlesearch.GetResponse(this.jsonclass).subscribe(event=>{
    //   this.old_search_result={"CAR(Rentals)": {
    //     "https://en.wikipedia.org/wiki/Car_rental": "Car rental agencies may also serve the self moving industry needs by renting vans or trucks and in certain markets other types of vehicles such as motorcycles or scooters may also be offered. citation needed Car rental companies operate by purchasing or leasing a number of fleet vehicles and renting them to their customers for a fee. At major airports or in larger cities some independent car rental agencies offer high end vehicles for rent. citation needed It is typical when renting a car to be offered various forms of supplemental insurance and or damage waivers as an optional extra at additional cost.",
    //     "https://en.wikipedia.org/wiki/National_Car_Rental": "National Car RentalOverview edit References edit External links edit Navigation menuPersonal toolsNamespaces Variants ViewsMore Search NavigationInteractionToolsIn other projectsPrint exportLanguagesNational Car Rental is an American rental car agency based in Clayton Missouri United States. In National acquired the Canadian fleet and operations of Tilden Rent a Car. In National was acquired by Republic Industries later renamed AutoNation . ANC filed for bankruptcy a year later its properties were sold to Vanguard Automotive Group controlled by Cerberus Capital Management in . On August Enterprise Rent A Car assumed control of Vanguard Automotive Group.",
    //     "https://en.wikipedia.org/wiki/Redspot_Car_Rentals": "Redspot Sixt rent a car pushes outbound and inbound business to each other. Today Redspot has locations throughout Australia and New Zealand. In Redspot Car Rentals acquired Australian Rent A Car and took possession and gave it presence in Queensland to Victoria. In Redspot formed a strategic alliance with Sixt Rent A Car Germany as its Australian car rental supplier. In March Redspot joined forces with Enterprise Holdings as its franchise partner in Australia and New Zealand as part of its Asia Pacific Growth Strategy ending its partnership with Sixt. In June Redspot launched its operations in New Zealand under the Enterprise banner servicing all brands."
    //   },
    //   "Car(Rentals) Business Model ": {
    //     "https://www.researchgate.net/figure/Example-business-model-canvas-of-the-car-repair-shop_tbl2_294960586": "none",
    //     "https://www.researchgate.net/figure/The-traditional-business-model-in-car-industry_fig1_316967359": "none",
    //     "https://www.slideshare.net/agarwalshalabh/car-rental-business-model-india": "Car rental Business Model India Shalabh Agarwal Car rental Business Model India You just clipped your first slide Slideshare uses cookies to improve functionality and performance and to provide you with relevant advertising. See our User Agreement and Privacy Policy. Slideshare uses cookies to improve functionality and performance and to provide you with relevant advertising. See our Privacy Policy and User Agreement for details. Published on Oct Aggregates Rental Platform for Car rental Industry in India. It focuses on organizing the unorganized car rental market in India that accounts for of the car rentals. LinkedIn Corporation Looks like you ve clipped this slide to already."
    //   },
    //   "Case Studies": {
    //     "https://enterprise.foursquare.com/four-wheel-drive-car-brand": "The GoalThis car brand was looking to connect with adventurous urban consumers by promoting one of their most popular vehicles with custom content around undiscovered places and hidden gems in various cities. The SolutionFoursquare designed an integrated program that leveraged a first to market sponsored guide on desktop mobile and in app of the best undiscovered venues in a dynamic radius around the user custom rich media units driving to the guide pre roll video and native in app units promoting this discovery focused campaign.",
    //     "https://www.academia.edu/5179058/A_CASE_STUDY_ON_THE_INDIAN_SMALL_CAR_INDUSTRY": "none",
    //     "https://www.renishaw.com/en/automotive-case-studies--39169": "Automotive case studiesBody chassis and wheelsPowertrainPrecision componentsMore application examplesNext stepsFind out moreAutomotive applicationsIndustriesLatest newsContact RenishawMyRenishawWeb shopEvents and exhibitionsCase brief Tyre mould production increasing productivity through automated part settingCase brief Forged alloy wheel production delivering high precision parts through in process gaugingCase brief Motorcycle cylinder head machining reduce scrap and increase machine productivity.Case brief Automotive pump body machining eliminating scrap through automatic part locationWorldwide demand for vehicles continues to grow and focus on fuel efficiency and emissions control from both domestic and commercial transport."
    //   },
    //   "Glossary  Car(Rentals)": {
    //     "https://www.autoeurope.com/car-rental-glossary/": "none",
    //     "https://www.autoslash.com/blog-and-tips/posts/ultimate-glossary-of-car-rental-terms": "Ultimate Glossary of Car Rental Terms Additional DriversAdditional EquipmentAdditional Rental ChargesAll Wheel Drive AWD Arena Center SurchargeCollision Damage Waiver CDW Concession Recovery Fee CRF Contract Modification FeeConvention Center SurchargeCorporate Discount Program CDP Customer Facility Charge CFC Diminished Value FeesDrop FeeFuel Purchase Option FPO Highway Use TaxLate Return ChargeLoss Damage Waiver LDW Loss of UseMotor Vehicle Rental TaxOne Way RentalParking Fine Recovery FeeParking SurchargePersonal Accident Insurance PAI Personal Effects Coverage PEC Roadside AssistanceSupplemental Liability Insurance SLI Tourism SurchargeUnderage SurchargeUninsured or Underinsured Motorist UM UIM Vehicle License Recovery FeeDon't know a CDW from an AWD And what the heck is a Concession Recovery Fee When you're renting a car it's very handy to learn a bit of industry terminology so there are no nasty surprises.Here's an A to Z guide to terms you may see on your rental agreement or hear at a rental car counter The only drivers permitted to get behind the wheel of a rental car are the primary driver and any licensed drivers expressly listed on the rental agreement.",
    //     "https://www.kemwel.com/rental-car-glossary/": "none"
    //   },
    //   "How Does Car(Rentals) works": {
    //     "https://en.wikipedia.org/wiki/Car_rental": "Car rental agencies may also serve the self moving industry needs by renting vans or trucks and in certain markets other types of vehicles such as motorcycles or scooters may also be offered. citation needed Car rental companies operate by purchasing or leasing a number of fleet vehicles and renting them to their customers for a fee. At major airports or in larger cities some independent car rental agencies offer high end vehicles for rent. citation needed It is typical when renting a car to be offered various forms of supplemental insurance and or damage waivers as an optional extra at additional cost.",
    //     "https://www.skyscanner.com/tips-and-inspiration/8-valuable-things-know-renting-car": "Bring your own extras when possibleRelatedExplorePartnersCompanyHelpInternational SitesTravel News Valuable Things to Check Consider Before Renting a CarRenting a car for your vacation Learn how to save money on that rental car with these easy tips.Renting a car for a vacation just makes sense. Even if you re already pulling into the airport it s worth your time to turn around and find a local gas station to fill up at.Sometimes you need more than just a car for the trip and rental car companies are great about having extras available for rent for your vacation.",
    //     "https://www.smartertravel.com/10-things-not-renting-car/": "Things Not to Do When Renting a CarPrepaying for GasolineFailing to Check on Your Way Out for a Place to Refuel on Your Way BackPurchasing Insurance Reason No. Your Own Auto Insurance Covers YouPurchasing Insurance Reason No. Your Credit Card Covers the RestIgnoring One Possible Caveat Loss of Use InsuranceIgnoring Potential Offers for UpgradesFailing to check for AAA AARP Reward Program or Other DiscountsMaking Too Cursory an Inspection Upon DepartureLeaving Final Inspection to ChanceCrossing International BordersTraveling Get a Carry On That Does MoreMore from SmarterTravel Today's Top Travel Deals Trending on Smarter Travel Things Not to Do When Renting a Car Ed Hewitt Related Related Related Related Related Related Top Fares From See Deal See Deal See Deal See Deal Don't see a fare you like View all flight deals from your city."
    //   },
    //   "Regulation For Car(Rentals)": {
    //     "https://en.wikipedia.org/wiki/Automotive_Industry_Standards": "This Committee has representatives from various organisations namely Ministry of Heavy Industries Public Enterprises MoHI PE MoRT H Bureau of Indian Standards BIS Testing Agencies such as International Centre for Automotive Technology ICAT Automotive Research Association of India ARAI Vehicle Research and Development Establishment VRDE Central Institute of Road Transport CIRT industry representatives from Society of Indian Automobile Manufacturers SIAM Automotive Component Manufacturers Association ACMA and Tractor Manufacturers Association TMA and representatives from State Transport Departments. The major functions of the committee are as follows AISC submits the draft safety standards in the form of recommendations to CMVR TSC for final approval.",
    //     "https://en.wikipedia.org/wiki/Automotive_Industry_Standards#Criticism": "This Committee has representatives from various organisations namely Ministry of Heavy Industries Public Enterprises MoHI PE MoRT H Bureau of Indian Standards BIS Testing Agencies such as International Centre for Automotive Technology ICAT Automotive Research Association of India ARAI Vehicle Research and Development Establishment VRDE Central Institute of Road Transport CIRT industry representatives from Society of Indian Automobile Manufacturers SIAM Automotive Component Manufacturers Association ACMA and Tractor Manufacturers Association TMA and representatives from State Transport Departments. The major functions of the committee are as follows AISC submits the draft safety standards in the form of recommendations to CMVR TSC for final approval.",
    //     "https://en.wikipedia.org/wiki/Automotive_Industry_Standards#Regulatory_framework": "This Committee has representatives from various organisations namely Ministry of Heavy Industries Public Enterprises MoHI PE MoRT H Bureau of Indian Standards BIS Testing Agencies such as International Centre for Automotive Technology ICAT Automotive Research Association of India ARAI Vehicle Research and Development Establishment VRDE Central Institute of Road Transport CIRT industry representatives from Society of Indian Automobile Manufacturers SIAM Automotive Component Manufacturers Association ACMA and Tractor Manufacturers Association TMA and representatives from State Transport Departments. The major functions of the committee are as follows AISC submits the draft safety standards in the form of recommendations to CMVR TSC for final approval."
    //   },
    //   "Top Startups For Car(Rentals)": {
    //     "https://disfold.com/top-indian-startups/": "Providing a wide of high quality products for all types of uses Urban Ladder s furniture is carefully selected with in house designers and delivered to customers thanks to the company s own logistics team.Website urbanladder.comIndustry Financial Services FinTech Total funding . Drivezy provides the technology and associated services to makes car sharing simple.Website drivezy.comIndustry Supply Chain Management B B Total funding MillionNinjacart is a B B platform connecting fresh products producers farmers manufacturers and brands to retailers and restaurants. It provides a technology platform and last mile management system that offers reliable and fast logistics solutions to e commerce operators in India allowing them to focus on their online selling.Website xpressbees.comIndustry E Commerce Health Care Total funding .",
    //     "https://startupsinindia.com/": "CARS creates an efficient and reliable way for car owners to sell their used cars at the Best Price.Click here to checkout CARS CrunchBase Twitter and LinkedIn profiles for more information on company founders funding information investors and competitors.CarDekho is India's leading car search venture that helps users buy cars that are right for them. The products are percent genuine and authentic sourced directly from the brands.Click here to checkout Nykaa CrunchBase Twitter and LinkedIn profiles for more information on company founders funding information investors and competitors.Toppr is India's leading after school learning app on a mission to make learning personalised.",
    //     "https://www.failory.com/blog/top-indian-startups": "Top Indian Startups The Complete List Update No code vs Custom Development Which One is Better Startup Post Mortem Anatomy Of A Perfect StrategyHow to Build a Startup Brand Guide Copywriting Mistakes that your Business is Making Learn How to Avoid Them The Top Indian StartupsHow Indian startup culture differs from the U.SConclusion Recent ArticlesWow MomoOla CabsAddressHealthZomatoPaytmFreshToHome FreshMenuFlyrobeMyraCure.FitDunzoShuttlDigit Insurance CoolBergCleardekhoThe MinimalistRazorpay Nineleaps Innov CoworkingSchbangAcko General InsuranceDon't let your software be the reason your startup fails.Reach Startup Founders Treebo HotelsInCredJumbotailDocTalkSmallcaseVedantuInstavansLoan Frame OvercartFlockDoctor InstaCowrks MgCars DailyhuntEbutorMeeshoMilkBasketPharmEasy Hours of Digital Marketing for MonthPolicybazaarRevvSharechatNykaaToppr TravelTriangle Urban LadderAisle MeBombay Shaving Company POPxoZestmoneyXpressbeesFunding FailoryLearnOtherFollow Us It is a great time for startups in India."
    //   }
    // }
    // this.googlesearch.GoogleResults=this.old_search_result
    
      if (event.type === HttpEventType.Response) {
        // this.googlesearch.GoogleResults={}
        this.old_search_result=event.body
        // this.googlesearch.GoogleResults=event.body
        this.googlesearch.GoogleResults=this.old_search_result
        this.googlesearch.combined_result=this.googlesearch.GoogleResults

        console.log(event.body)
        this.ngxLoader.stop()
        this.router.navigate(['/navbar'])
        // this.googlesearch.keys=Object.keys(this.googlesearch.GoogleResults)

        // this.ngxLoader.stop()
       
}
     

     })

    }
//  this.ngxLoader.start()
 this.wordcloudservice.GetWorldCloudResponse(this.jsonclass).subscribe(event=>{
   if(event.type === HttpEventType.Response){
    this.router.navigate(['/navbar'])
     console.log(event.body)
     this.wordcloudservice.flag=false
     this.wordcloudservice.url="https://dataextractor97.blob.core.windows.net/baassist/"+event.body
     console.log(this.wordcloudservice.url)
    //  this.wordcloudservice.wordcloudresponse=event.body
    //  
    //  this.wordcloudservice.wordcloudresponse.forEach(element => {
    //   this.word=<AgWordCloudData>{}
    //   this.word.size=element.size
    //   this.word.text=element.text
    //   this.wordcloudservice.wordData.push(this.word)  
    
     

       
     }
     console.log(this.wordcloudservice.wordData)
     
     
   }
 )
 
  //  console.log(this.domainclassobject)
  

  



 
 this.domainmodelService.GetListOfItens(this.jsonclass).subscribe(event=>{
//    this.new_search_result={"Results":{
//     "http://news.xinhuanet.com/english/2017-03/15/c_136130899.htm": "Mar 15, 2017 ... Beijing pledges to strengthen regulation of online catering platforms to ... \nAccording to statistics, Beijing has five online food ordering and ...",
//     "http://www.clickformeal.com/help": "ClickForMeal.com is the FIRST online food ordering e-commerce portal in Oman \nthat lets internet users easily find restaurants, view their updated menus, read ...",
//     "http://www.publishingindia.com/atithya/89/to-study-the-inclination-of-consumers-in-baner-area-in-relation-to-the-online-food-ordering/547/3914/": "... Foodpanda.in, Tinyowl.com, Zomato.com) etc. Keywords: Online Food \nOrdering, E-commerce, QSRs, Multi-Restaurant Site, Mobile Apps. View PDF. \nSitelinks.",
//     "http://www.starmicronics.com/blog/category/promoprnt/": "Uber Eats is an American online food ordering and delivery platform launched .... \nGDPR (or the General Data Protection Regulation) has had implications for \nforeign ... and retailers, and now similar regulations are coming to the United \nStates.",
//     "https://en.wikipedia.org/wiki/Menulog": "Industry, Online food ordering, e-commerce. Founded, Dan Katz Leon Kamenev \nKevin Sherman Sydney, Australia, 2006. Headquarters, Sydney, New South \nWales. Parent · Just Eat. Website, menulog.com.au. Menulog Pty. Ltd. is an \nAustralian and New Zealand online food and beverage ordering app. ... Menulog \noperates in all major Australian states and cities.",
//     "https://github.com/iluxonchik/catshef": "Online food ordering e-commerce application. Contribute to iluxonchik/catshef \ndevelopment by creating an account on GitHub.",
//     "https://smallbizclub.com/startup/creating-a-plan/13-profitable-models-start-food-ordering-business/": "Sep 2, 2016 ... Kitchen service, as well as the online food-ordering platform, can be managed by \nthe food startup itself under this business model. Examples ...",
//     "https://uxdesign.cc/ui-ux-case-study-feedme-mobile-app-for-ordering-food-ef0e7f8c82ba": "Dec 19, 2018 ... This case study describes my process of designing the app from the idea ... \npopularity of online food ordering were: lack of time to prepare food, ...",
//     "https://uxplanet.org/ordering-food-online-a-ux-case-study-c9d82aae7cdf": "May 10, 2019 ... A UX case study on online food ordering app, Swiggy. Major factors that help in \nmaking decisions and place orders.",
//     "https://www.exceptionaire.com/case-study-online-food-ordering-app/": "In today's world, people are always on the move and have less to no time to stop \nand spend time for food or drinks. People prefer to get things done on the go, ...",
//     "https://www.fatbit.com/fab/brilliant-startup-idea-online-office-food-ordering-delivery-business/": "Many follow online food ordering & delivery business model but only a few \nstartups adhere to the office food-delivery business. This is the reason why new ...",
//     "https://www.quora.com/What-are-the-top-failed-startups-in-2016": "The Foodpanda group is one of the world's largest online food ordering \nmarketplaces in .... Location: Utah, United States ..... Which top startups failed in \nIndia?",
//     "https://www.quora.com/What-is-the-business-model-of-online-food-ordering-websites": "Lets me answer this in detail ,as i was working on Online food ordering startup ,i \nmet lot of Restaurant owners and they told me the truth under the hood.",
//     "https://www.quora.com/What-would-be-the-minimum-investment-if-I-want-to-start-a-food-ordering-site-like-foodpanda-in-India": "A small team with 2 people can work to manage the orders on web. ... with the \nhelp of YoYumm it is a ready made online food ordering e-commerce solution \nwith ...",
//     "https://www.spaceotechnologies.com/pizza-delivery-app-development-top-reasons-startups/": "Dec 4, 2018 ... In this image, you can see top startups that have raised money in the ... Talking \nabout the United States, the pizza market was valued at $45.1 billion. ... an on-\ndemand pizza delivery or online food ordering app development ...",
//     "https://www.startupranking.com/top/united-states/57": "The top startups for United States 5601 - 5700 in Startup Ranking featuring \nstartups/companies like TasteSpace, Just Mail, Droidbuddy.me, QuitJuice.com, ...",
//     "https://www.uscis.gov/sites/default/files/err/D2%20-%20Temporary%20Worker%20in%20a%20Specialty%20Occupation%20or%20Fashion%20Model%20(H-1B)/Decisions_Issued_in_2018/JUN072018_07D2101.pdf": "Jun 7, 2018 ... The Petitioner, an online food-ordering service, seeks to temporarily employ the \n... equivalent) as a minimum for entry into the occupation in the United States. \nThe regulation at 8 C.F.R. § 214.2(h)(4)(ii) largely restates this ..."
//   }
// }
// this.googlesearch.GoogleResults=this.new_search_result
// this.googlesearch.combined_result=Object.assign(this.old_search_result,this.new_search_result)
// console.log(this.combined_result)
  if(event.type === HttpEventType.Response){
    this.ngxLoader.stop()
    this.domainmodelService.RecivedItems=event.body
    this.domainmodelService.flag=true;
    this.router.navigate(['/navbar'])
    this.domainclassobject.domain=this.jsonclass.domain
    this.domainclassobject.subdomain=this.jsonclass.sub_domain
    this.domainclassobject.country=this.jsonclass.country
    this.domainmodelService.RecivedItems.forEach(item=>{
   if(item!=this.jsonclass.country.toLowerCase() && item!=this.jsonclass.domain.toLowerCase() && item !=this.jsonclass.sub_domain.toLowerCase() && this.cnt<5)
   {
    this.domainclassobject.topwords.push(item)
    this.cnt++;

   }
  })
    this.domainmodelsearchservice.GetResponse(this.domainclassobject).subscribe(event=>{
    
      if(event.type === HttpEventType.Response)
    {
      this.new_search_result=event.body
      this.googlesearch.GoogleResults=this.new_search_result
      this.googlesearch.combined_result=Object.assign(this.old_search_result,this.new_search_result)
      this.googlesearch.iscombined_result=true
      
      console.log(event.body)
    }
      
    })
    
    // console.log(this.domainmodelService.RecivedItems)
    // this.router.navigate(['/domainmodel'])

  }
  
 })

}
}
export class JsonClass 
{
  domain:string;
  sub_domain:string;
  country:string

}
export class DomainModelClass
{
  domain:string;
  subdomain:string;
  country:string;
  topwords=[];

}
