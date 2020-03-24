import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { ApiService } from '../routing-utils/api.service';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private apiService: ApiService
  ) { }

  getBooks(): Observable<Book[]> {
    return this.apiService.get('/books');
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/books/team');
  }
}
