import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceApiService {
  url="https://api.themoviedb.org/3/";
  apiKey = "&api_key=75a4f913ef5be22ca9879fa5a2f17e9a";


  constructor(private httpClient : HttpClient) {}
  async get(path){
    return await this.httpClient.get<any>(this.url + path + this.apiKey).toPromise();
   }

}
