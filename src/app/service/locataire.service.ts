import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LocataireService {
  
  constructor(private http: HttpClient) { }
  
  baseUrl:string = 'http://localhost:8080/locataires';
  
  create(obj: any) {
    return this.http.post(this.baseUrl, obj);
  }
  
  listLocataires(){
    return this.http.get(this.baseUrl);
  }

  viewLocataire(id:string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteLocataire(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateLocataire(id:string, obj:any){
    return this.http.put(`${this.baseUrl}/${id}`,obj);
  }
}
