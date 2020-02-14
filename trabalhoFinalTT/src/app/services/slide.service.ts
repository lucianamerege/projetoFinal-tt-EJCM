import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
    apiUrl: string = "http://localhost:8000/api/"

    httpHeaders: any = {
        headers: {
            'Content-Type': 'appication/json',
            'Accept': 'application/json'
        }
    }
  constructor(public httpClient: HttpClient) { }


  criaLivro(form): Observable<any> {
      return this.httpClient.post(this.apiUrl + 'listLivro', form, this.httpHeaders)

  }


}
