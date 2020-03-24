import { Injectable } from '@angular/core';
import { ApiService } from '../routing-utils/api.service';
import { Observable } from 'rxjs';
import { Toy } from '../models/toy';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  constructor(
    private apiService: ApiService
  ) { }

  getToys(): Observable<Toy[]> {
    return this.apiService.get('/toys');
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/toys/team');
  }
  
}
