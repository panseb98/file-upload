import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XmlModel } from './model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml', //<- To SEND XML
    'Accept':  'application/xml',       //<- To ask for XML
    'Response-Type': 'text'             //<- b/c Angular understands text
  })
};
@Injectable({
  providedIn: 'root'
})
export class UploadfileService {
  constructor(private http : HttpClient) { }

  addFile(file : File){
    console.log(file);
    var formData = new FormData();
    formData.append('userInfo', file);
    return this.http.post('http://localhost:8080/save', file, httpOptions);
  }
  getData(){
    return this.http.get<Array<XmlModel>>('http://localhost:8080/getAllUsers');
  }
}
