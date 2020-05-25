import { Component } from '@angular/core';
import {MatSnackBar, MatFormFieldControl} from '@angular/material';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-upload';

  constructor(private _snackBar: MatSnackBar) {}
  ngOnInit(){
    
  }
  openSnackBar() {
    this._snackBar.open('message', 'ction', {
      duration: 2000,
    });
  }
}
