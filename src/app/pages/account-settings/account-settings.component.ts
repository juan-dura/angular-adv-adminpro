import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  //Las consultas al DOM hay que evitar que estén dentro de
  //las funciones. Cuantes menos veces se haga mejor
  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;


  constructor(private settingsService: SettingsService ) { }

  ngOnInit() {
    this.links = document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme(this.links);
  }

  changeTheme( theme: string) {
    this.settingsService.changeTheme(theme, this.links);
  }

}
