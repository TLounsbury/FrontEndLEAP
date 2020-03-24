import { Injectable } from '@angular/core';
import { Laptop } from '../models/laptop';
import { ApiService } from '../routing-utils/api.service';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(
    private apiService: ApiService
  ) { }

  getLaptops(): Observable<Laptop[]> {
    return this.apiService.get('/laptops');
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/laptops/team');
  }
}
