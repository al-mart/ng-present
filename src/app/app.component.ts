import { Component } from '@angular/core';
import {LoginDialogComponent} from "./components/login-popup/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;

  login(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
  }

  constructor(private loginDialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.loginDialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      result && this.login();
    });
  }
}
