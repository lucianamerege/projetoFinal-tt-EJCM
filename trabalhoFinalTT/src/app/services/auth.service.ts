import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "http://localhost:8000/api/"

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  registrarUser( form ): Observable<any> {
    return this.HttpClient.post( this.apiUrl + 'register', form, this.httpHeaders);
  }
  logarUser( form ): Observable<any> {
    return this.HttpClient.post( this.apiUrl + 'login', form, this.httpHeaders);
  }

  logout(): Observable<any> {
    console.log(this.httpHeaders);
    this.httpHeaders.headers["Authorization"] = 'Bearer ' + localStorage.getItem('userToken');
    return this.HttpClient.get( this.apiUrl + 'logout', this.httpHeaders );
  }

  getLivro(id: any): Observable<any>{
    return this.HttpClient.get(this.apiUrl + 'mostraLivro/' + id);
  }

  constructor(public HttpClient: HttpClient ) { }
}
