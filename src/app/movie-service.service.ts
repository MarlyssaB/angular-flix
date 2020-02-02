import { Injectable } from '@angular/core';
import { MovieServiceApiService } from './movie-service-api.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {
  searchResults = [];
  myMovieList = [];

  constructor(private movieServiceApi : MovieServiceApiService, private apiService : ApiService) { }

  getSearchResults(){
    return this.searchResults;
  }
  getMovieList(){
    return this.myMovieList;
  }

  async searchForMovies(searchTerm) {
    let response = await this.movieServiceApi.get(`search/multi?query=${searchTerm}`);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
    return this.searchResults;
  }

  async loadMovieList() {
    let results = await this.apiService.get(`publicapi/movies`);
    this.myMovieList.length = 0;
    this.myMovieList.push(...results);
  }

  async saveToList(movie) {
    await this.apiService.post(`publicapi/movies`, movie);
    this.loadMovieList();
  } 
}
