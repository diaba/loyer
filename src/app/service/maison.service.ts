import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaisonService {
  constructor(private http: HttpClient) { }
  
  baseUrl:string = 'http://localhost:8080/maisons';
  create(obj: any) {
    return this.http.post(this.baseUrl, obj);
  }
  
  listMaisons(){
    return this.http.get(this.baseUrl);
  }

  viewMaison(id:string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteLMaison(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateMaison(id:string, obj:any){
    return this.http.put(`${this.baseUrl}/${id}`,obj);
  }

}
