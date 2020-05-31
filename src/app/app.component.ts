import { Component, ViewChild, ElementRef } from '@angular/core';
import {MatSnackBar, MatFormFieldControl, MatTableDataSource} from '@angular/material';
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
  dataSource: MatTableDataSource<XmlModel>;
  [x: string]: any;

  constructor(private _snackBar: MatSnackBar, public _service : UploadfileService) {
    this.dataSource = new MatTableDataSource(this.items);

  }
  private initItems(){
    this._service.getData().subscribe(res => {
      this.dataSource = new MatTableDataSource(res as Array<XmlModel>);
    });
  }
  ngOnInit(){
    this.initItems();
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
        this._service.addFile(files[i] as File).subscribe(res => {this.openAlert(res as string);     this.initItems(); }, err => this.openAlert(err as string));
      }
    }
        this.initItems();


  }
  private openAlert(name : string){
    this._snackBar.open(name, 'Zamknij', {
      duration: 4000,
    });
  }
  
}
const types = ['application/x-zip-compressed', 'text/xml'] 



