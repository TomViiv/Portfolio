import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

@NgModule({
  declarations: [AppComponent, TimelineItemComponent, CarouselComponent, HomePageComponent, ProjectPageComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, NgbModule, FontAwesomeModule],
})
export class AppModule { }
