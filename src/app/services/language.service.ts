import { Injectable } from '@angular/core';
import translationsFR from '../../assets/i18n/fr.json';
import {TranslateService} from '@ngx-translate/core';
import translationsEN from '../../assets/i18n/en.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.currentLanguage);
    translate.use(this.currentLanguage);
  }

  changeLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translate.use(this.currentLanguage);
    if (this.currentLanguage === 'fr') {
      this.translate.setTranslation('fr', translationsFR);
    } else {
      this.translate.setTranslation('en', translationsEN);
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
