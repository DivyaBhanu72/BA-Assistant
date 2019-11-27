import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdalService } from 'adal-angular4';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatCardModule} from '@angular/material/card';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { WordCloudComponent } from './modules/word-cloud/word-cloud.component';
import { AgWordCloudModule} from 'angular4-word-cloud';
import { GoogleSearchLinksComponent } from './modules/google-search-links/google-search-links.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component'
import {MatTabsModule} from '@angular/material/tabs';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { DomainModelComponent } from './modules/domain-model/domain-model.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DiagramContextMenuService, ConnectorEditingService } from '@syncfusion/ej2-angular-diagrams';
import { ResultsWordcloudComponent } from './modules/results-wordcloud/results-wordcloud.component';
import { PopupComponent } from './modules/dashboard/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    WordCloudComponent,
    GoogleSearchLinksComponent,
    NavBarComponent,
    DomainModelComponent,
    ResultsWordcloudComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    NgxUiLoaderModule,
    AgWordCloudModule.forRoot(),
    DiagramModule,
    DragDropModule
  ],
  providers: [AdalService,DiagramContextMenuService, ConnectorEditingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);
