import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {TranslateDirective, TranslatePipe, TranslateService} from '@ngx-translate/core';
import translationsEN from '../assets/i18n/en.json';
import translationsFR from '../assets/i18n/fr.json';
import {LanguageService} from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, TranslatePipe, TranslateDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tp_angular_films');

  constructor(private translate: TranslateService, private langService: LanguageService) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.setTranslation('en', translationsEN);
  }

  switchLanguage() {
    this.langService.changeLanguage();
  }
}
