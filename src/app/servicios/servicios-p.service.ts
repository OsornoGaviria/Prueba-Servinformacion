import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiciosPService {
  
  constructor(private http: HttpClient) { }

 

  verUsuarios(data){
    const  apiUrl= 'https://api.github.com/search/users?q='+data; 
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.get(apiUrl);
  }


  verUsuario(data){
    const  apiUrl= 'https://api.github.com/users/'+ data; 
    console.log(apiUrl)
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.get(apiUrl);
  }
}
