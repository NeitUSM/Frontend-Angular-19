import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-edit-employees',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-edit-employees.component.html',
  styleUrl: './add-edit-employees.component.css'
})
export class AddEditEmployeesComponent implements OnInit{
  
  form: FormGroup;
  isEditing: boolean = false;
  employeeId: string | null = null;

  constructor(
    private fb: FormBuilder, 
    private employeeService: EmployeeService, 
    private router: Router, 
    private route: ActivatedRoute,){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(45)]],
      salary: ['', Validators.required],
    })
  }
  
  ngOnInit(): void {
    // Verificar si estamos en modo edición
    this.route.paramMap.subscribe((params) => {
      this.employeeId = params.get('id');
      if (this.employeeId) {
        this.isEditing = true;
        this.loadEmployeeData(this.employeeId);
      }
    });
  }

  async loadEmployeeData(id: string) {
    this.employeeService.getEmployee(id).subscribe((employee) => {
      this.form.patchValue({
        name: employee.name,
        salary: employee.salary,
      });
    });
  }

  saveEmployee() {
    const employee: Employee = {
      id: 0,
      name: this.form.value.name,
      salary: this.form.value.salary,
    };

    if (this.isEditing && this.employeeId) {
      // Actualizar empleado existente
      this.employeeService.updateEmployee(this.employeeId, employee).subscribe({
        next: () => {
          console.log('Empleado actualizado');
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error al actualizar empleado:', err);
        },
      });
    } else {
      // Agregar nuevo empleado
      this.employeeService.createEmployee(employee).subscribe({
        next: () => {
          console.log('Empleado agregado');
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error al agregar empleado:', err);
        },
      });
    }
  }
}
