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
  displayedColumns = ['name', 'surname', 'city', 'phone'];
  myDate = new Date();
  dataSource: MatTableDataSource<XmlModel>;
  [x: string]: any;

  constructor(private _snackBar: MatSnackBar, public _service : UploadfileService) {
    this.dataSource = new MatTableDataSource(this.items);

  }
  private initItems(){
    this._service.getData().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res as Array<XmlModel>);
    });
  }
  openFile(event) {
      var input = event.target;
      console.log(input);
    var text = "";
      var reader = new FileReader();
      var onload = function(event) {
        this.text = reader.result;
      };
      console.log(this.text);
      reader.onload = onload;
      reader.readAsText(input.files[0]);
    
    };
  ngOnInit(){
    this.initItems();
  }
  /*ELEMENT_DATA: XmlModel[] = [
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1},
    {surname: 'asd', name: 'Hydrogen', phone: '123123123123', city: 'H', birthDate: this.myDate, id: 1}
  ];*/
  public onChange11(event) {
      console.log('di');
      var file = event.target.files[0];
      var reader = new FileReader();
      if(!types.includes(file.type)){
        console.log('di');

        this.openAlert('Typ pliku ' + file.name + ' nie jest akceptowany');
        return;
      }
      else{
        console.log(file.type);

        if (file.type == 'text/xml'){
          console.log('touch');

          var reader = new FileReader();
          reader.onload = (e: any) => {
            console.log('touch');

            // The file's text will be printed here
            this._service.addFile(e.target.result as File).subscribe(res => {this.openAlert(res as string);  console.log(res);   this.initItems(); }, err => {this.openAlert(err as string); console.log(err);});
             
          };
          reader.readAsText(file);

        }
        else{
          this._service.addFile(file as File).subscribe(res => {this.openAlert(res as string);  console.log(res);   this.initItems(); }, err => {this.openAlert(err as string); console.log(err);});

        }
        
        
      }
  

   
  }
  openSnackBar(file) {

    /*const files = (this.file.nativeElement as HTMLInputElement).files;
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      if(!types.includes(files[i].type)){
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            var text = reader.result;
        }
        this.openAlert('Typ pliku ' + files[i].name + ' nie jest akceptowany');
        return;
      }
      else{
        this._service.addFile(files[i] as File).subscribe(res => {this.openAlert(res as string);  console.log(res);   this.initItems(); }, err => {this.openAlert(err as string); console.log(err);});
      }*/

       // this.initItems();

    }
  
  private openAlert(name : string){
    this._snackBar.open(name, 'Zamknij', {
      duration: 4000,
    });
  }
  
}
const types = ['application/x-zip-compressed', 'text/xml'] 



