import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppWorkspaceComponent } from './app-workspace/app-workspace.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import {MaterialModule} from "./material.module";
import { CircleStatComponent } from './components/circle-stat/circle-stat.component';
import {PersonalCabinetComponent} from "./app-workspace/personal-cabinet/personal-cabinet.component";
import {LoginDialogComponent} from "./components/login-popup/login-dialog.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppWorkspaceComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidenavComponent,
    CircleStatComponent,
    PersonalCabinetComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
