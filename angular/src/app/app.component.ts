import { Component, ViewChild } from '@angular/core';
import { myProjects } from './model/datas/projects';
import { Router } from '@angular/router';
import { NgFor, ViewportScroller } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { faDiagramProject, faEnvelope, faHouse, faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  projects = myProjects;

  faHouse = faHouse;

  langage : 'fr' | 'en' = 'fr'; //TODO faire avec babel ?

  faDiagramProject = faDiagramProject;
  faEnvelope = faEnvelope;
  faPalette = faPalette;

  constructor(private scroller: ViewportScroller){

  }

  goToContact() : void {
    this.scroller.scrollToAnchor("contact");
  }

  getResumeUrl() : string {
    if(this.langage == 'fr'){
      return '/assets/Vivier_Thomas_CV.pdf'
    } else {
      return ''; //TODO version anglaise du CV
    }
  }

  getResumeFilename() : string {
    if(this.langage == 'fr'){
      return 'Vivier_Thomas_CV.pdf'
    } else {
      return ''; //TODO version anglaise du CV
    }
  }


}
