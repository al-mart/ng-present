import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.component.html',
})
export class LoginDialogComponent {

  currentData =  {
    login: "",
    password: ""
  };
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onLoginClicked(){
    if(this.currentData.login == "admin" && this.currentData.password == "111"){
      this.dialogRef.close(true);
    }
  }
}
