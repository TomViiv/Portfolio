import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faDiagramProject, faEnvelope, faFileArrowDown, faPalette, faCopy as fasCopy } from '@fortawesome/free-solid-svg-icons';
import { faCopy as farCopy } from '@fortawesome/free-regular-svg-icons';
import { hobbies } from '../model/datas/hobbies';
import { ProjectService } from '../services/project.service';
import { LanguageService } from '../services/language.service';
import { UtilsService } from '../services/utils.service';
import { myProjects } from '../model/datas/projects';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  projects = myProjects;
  
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

  constructor(private languageService: LanguageService, public projectService: ProjectService, public utils: UtilsService){}

  getResumeUrl() : string {
    if(this.languageService.getSelectedLanguage() == 'fr'){
      return '/assets/Thomas_Vivier_Ingenieur_Full_Stack_CV.pdf'
    } else {
      return ''; //@TODO version anglaise du CV
    }
  }

  getResumeFilename() : string {
    if(this.languageService.getSelectedLanguage() == 'fr'){
      return 'Thomas_Vivier_Ingenieur_Full_Stack_CV.pdf'
    } else {
      return ''; //@TODO version anglaise du CV
    }
  }

  test() : void {
    console.log("test");
  }
}
