import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faDiagramProject, faEnvelope, faHouse, faPalette, faAddressCard, faFileArrowDown, faCopy as fasCopy } from '@fortawesome/free-solid-svg-icons';
import { hobbies } from './model/datas/hobbies';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopy as farCopy } from '@fortawesome/free-regular-svg-icons';
import { UtilsService } from './services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  faHouse = faHouse;

  langage : 'fr' | 'en' = 'fr'; //@TODO faire avec babel ?

  faDiagramProject = faDiagramProject;
  faEnvelope = faEnvelope;
  faPalette = faPalette;
  faAdressCard = faAddressCard;
  faLinkedin = faLinkedin;
  faGitHub = faGithub;
  faFileDL = faFileArrowDown;
  farCopy = farCopy;
  fasCopy = fasCopy;

  hobbies = hobbies;

  constructor(private router: Router, private scroller: ViewportScroller, public utils:UtilsService){

  }

  goTo(id: string) : void {
    if(this.router.url != ""){
      this.returnHome();
      let that = this;
      setTimeout(() => {
        that.scroller.scrollToAnchor(id);
      }, 10);
    } else {
      this.scroller.scrollToAnchor(id);
    }
  }

  returnHome() : void {
    this.router.navigate(['']);
  }
}
