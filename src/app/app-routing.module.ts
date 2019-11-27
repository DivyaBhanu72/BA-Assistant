import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordCloudComponent} from './modules/word-cloud/word-cloud.component'
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { GoogleSearchLinksComponent } from './modules/google-search-links/google-search-links.component'
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { DomainModelComponent } from './modules/domain-model/domain-model.component';
import { ResultsWordcloudComponent } from './modules/results-wordcloud/results-wordcloud.component';



const routes: Routes = [
  {
    path:'' , component:DashboardComponent
  },
  {
    path:'navbar' , component:NavBarComponent 
  },
  {
    path:'domainmodel' , component:DomainModelComponent 
  },
  {
    path:'common',component:ResultsWordcloudComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
