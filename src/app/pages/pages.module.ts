import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//Modulos
// import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

//componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AccountSettingsComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    // AppRoutingModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
