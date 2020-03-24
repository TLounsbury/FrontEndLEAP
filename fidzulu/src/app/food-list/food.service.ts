import { Injectable } from '@angular/core';
import { ApiService } from '../routing-utils/api.service';
import { Observable } from 'rxjs';
import { Food } from '../models/food';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private apiService: ApiService
  ) { }

  getFood(): Observable<Food[]> {
    return this.apiService.get('/food');
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/food/team');
  }
  
}
