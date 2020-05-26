import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { XmlModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {
  constructor(private http : HttpClient) { }

  addFile(file : File){
    var formData = new FormData();
    formData.append('file', file);
    return this.http.post('https://localhost:44307/matkaMozejki', formData);
  }
  getData(){
    return this.http.get<Array<XmlModel>>('https://localhost:44307/matkaMozejki');
  }
}
