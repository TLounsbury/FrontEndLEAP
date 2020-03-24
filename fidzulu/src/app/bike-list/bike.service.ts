import { Injectable } from '@angular/core';
import { ApiService } from '../routing-utils/api.service';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(
    private apiService: ApiService
  ) { }

  getBikes(): Observable<Bike[]> {
    return this.apiService.get(`/bikes/all/${location}`); // 'bikes' different than spec
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/bikes/team');
  }
}
