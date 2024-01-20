import { Component, ViewChild } from '@angular/core';
import { myProjects } from './model/datas/projects';
import { Router } from '@angular/router';
import { NgFor, ViewportScroller } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { faDiagramProject, faEnvelope, faHouse, faPalette, faAddressCard, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { hobbies } from './model/datas/hobbies';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
  faAdressCard = faAddressCard;
  faLinkedin = faLinkedin;
  faGitHub = faGithub;
  faFileDL = faArrowDown;

  hobbies = hobbies;

  constructor(private scroller: ViewportScroller){

  }

  goTo(id: string) : void {
    this.scroller.scrollToAnchor(id);
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

  copyMail() : void {
    try {
      navigator.clipboard.writeText("thomas.vivier99@gmail.com");
      confirm("Adresse mail copiée :)");
    } catch (err) {
      console.error(err.name, err.message);
    }
  }


}
