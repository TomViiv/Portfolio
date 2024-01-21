import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
    this.initObservables();
  }

  private initObservables() : void {
    
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
