import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoyerService {

  constructor(private http: HttpClient) { }
  
  baseUrl:string = 'http://localhost:8080/locataires';
  baseUrl1:string = 'http://localhost:8080/loyers';
  create(id1:string, id2:string, obj: any) {
    return this.http.post(`${this.baseUrl}/${id1}/assets/${id2}`, obj);
  }
  
  listLoyers(id1:string, id2:string){
    return this.http.get(`${this.baseUrl}/${id1}/assets/${id2}`);
  }
  listAllLoyers(){
    return this.http.get(`${this.baseUrl1}`);
  }
  viewLoyer(id:string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteLoyer(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateLoyer(id:string, obj:any){
    return this.http.put(`${this.baseUrl}/${id}`,obj);
  }
}
