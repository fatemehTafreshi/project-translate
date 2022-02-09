import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rtl = false;
  currentLanguage: string = 'en';
  languageCode = 'en';

  constructor(public translate: TranslateService) {
  }

  languages = [
    {'languageCode': 'en', 'languageName': 'English'},
    {'languageCode': 'fa', 'languageName': 'Persian'},
  ]

  ngOnInit() {
  }



  ontoggle() {
    this.rtl = !this.rtl;
  }

  languageChange($event: string) {
    debugger;
    this.currentLanguage = $event;
    this.translate.use(this.currentLanguage);

  }

}

