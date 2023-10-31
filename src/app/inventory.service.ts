import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private baseURL = 'http://localhost:3000/vehicle';

  constructor(private httpClient: HttpClient) {}

  public inventory(): Observable<Array<Vehicle>> {
    return this.httpClient.get<Array<Vehicle>>(`${this.baseURL}`);
  }
  public add(v: Vehicle): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, v);
  }
  public update(oldVin: string, newVehicle: Vehicle): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${oldVin}`, newVehicle);
  }
  public delete(v: Vehicle) {
    return this.httpClient.delete(`${this.baseURL}/${v.VIN}`);
  }
}
