import { Injectable } from '@angular/core';
import { ApiService } from '../routing-utils/api.service';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  constructor(
    private apiService: ApiService
  ) { }

  getDvds(): Observable<Dvd[]> {
    return this.apiService.get('/dvds');
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/dvds/team');
  }
}
