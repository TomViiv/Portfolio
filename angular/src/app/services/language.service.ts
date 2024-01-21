import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSource = new BehaviorSubject<"en" | "fr">("fr");
  public language$: Observable<"en" | "fr">;

  constructor() {
    this.initObservables();
  }

  private initObservables() : void {
    this.language$ = this.languageSource.asObservable();
  }

  selectLanguage(lang: "en" | "fr") : void {
    this.languageSource.next(lang);
  }

  getSelectedLanguage() : "en" | "fr" {
    return this.languageSource.getValue();
  }
}
