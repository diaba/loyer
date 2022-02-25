import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }
  
  baseUrl:string = 'http://localhost:8080/assets';
  
  
  
  listAssets(){
    return this.http.get(`${this.baseUrl}`);
  }
}
