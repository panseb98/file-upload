import { Component, ViewChild, ElementRef } from '@angular/core';
import {MatSnackBar, MatFormFieldControl} from '@angular/material';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { XmlModel } from './model';
import { UploadfileService } from './uploadfile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fileInput', { read: ElementRef })
  file: ElementRef;
  title = 'file-upload';
  displayedColumns = ['name', 'surname', 'city', 'birthdate', 'phone'];
  myDate = new Date();

  constructor(private _snackBar: MatSnackBar, public _service : UploadfileService) {
    
  }
  ngOnInit(){
    
  }
  ELEMENT_DATA: XmlModel[] = [
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1}
  ];
  openSnackBar(file : File[]) {
    const files = (this.file.nativeElement as HTMLInputElement).files;
    for (let i = 0; i < files.length; i++) {
      if(!types.includes(files[i].type)){
        this.openAlert('Typ pliku ' + files[i].name + ' nie jest akceptowany');
        return;
      }
      else{
        this._service.addFile(files[i] as File).subscribe(res => this.openAlert(res as string), err => this.openAlert(err as string));
      }
    }

  }
  private openAlert(name : string){
    this._snackBar.open(name, 'Zamknij', {
      duration: 4000,
    });
  }
  
}
const types = ['application/x-zip-compressed', 'text/xml'] 



