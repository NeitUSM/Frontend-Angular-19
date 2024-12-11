import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees/`); 
  }

  getEmployee(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees/${id}`);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.apiUrl}/employees`, employee);
  }

  updateEmployee(id: string, employee: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/employees/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/employees/${id}`);
  }
}