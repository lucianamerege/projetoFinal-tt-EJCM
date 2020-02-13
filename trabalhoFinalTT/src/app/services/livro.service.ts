import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
    apiUrl: string = "http://localhost:8000/api/"

    httpHeaders: any = {
        headers: {
            'Content-Type': 'appication/json',
            'Accept': 'application/json'
        }
    }
  constructor(public HttpClient: HttpClient) { }


  criaLivro(form): Observable<any> {
      return this.HttpClient.post(this.apiUrl + 'criaLivro', form, this.httpHeaders)

  }
}
