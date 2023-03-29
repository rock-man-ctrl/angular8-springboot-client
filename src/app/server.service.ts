import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/servers';

  constructor(private http: HttpClient) { }

  getServer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createServer(server: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, server);
  }

  updateServer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteServer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getServersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
