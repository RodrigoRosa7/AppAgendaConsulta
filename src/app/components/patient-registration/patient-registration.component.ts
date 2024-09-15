import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
})
export class PatientRegistrationComponent {
  patientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Cria o formulário com validações
    this.patientForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      birthDate: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      observations: [''],
    });
  }

  onSave() {
    if (this.patientForm.valid) {
      console.log('Paciente cadastrado:', this.patientForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
