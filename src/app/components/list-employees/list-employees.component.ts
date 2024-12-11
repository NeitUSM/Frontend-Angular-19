import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employees',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {

  listEmployees: Employee[] = []

  constructor(private employeeService: EmployeeService, private router: Router) {}
  ngOnInit(): void{
    this.employeeService.getEmployees().subscribe(data => {
      this.listEmployees = data;
    });
  }

  async deleteEmployee(employeeID: number){
    let employeeIDString = employeeID.toString()
    this.employeeService.deleteEmployee(employeeIDString).subscribe({
      next: (response) => {
        //Para actualizar automaticamente la página
        this.listEmployees = this.listEmployees.filter(emp => emp.id !== employeeID);
      },
      error: (err) => {
        console.error('Error al eliminar el empleado:', err);
      }
    });
  }
}
