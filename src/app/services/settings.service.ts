import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');


  constructor() {
    const url = localStorage.getItem('theme') || "./assets/css/colors/purple-dark.css";
    this.linkTheme.setAttribute('href',url);
   }

   changeTheme( theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href',url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');;


    //eliminar la clase working de quien la tenga, y poner el correcto
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentThemeUrl = this.linkTheme.getAttribute('href');
      if (btnThemeUrl === currentThemeUrl) {
        element.classList.add('working');
      }
    });
  }


}
