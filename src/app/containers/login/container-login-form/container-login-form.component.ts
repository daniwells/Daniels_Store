import { Component, inject } from '@angular/core';
import { InputLoginComponent } from '../../../components/login/input-login/input-login.component';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginResponse } from '../../../interfaces/login-interfaces';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-login-form',
  standalone: true,
  imports: [InputLoginComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './container-login-form.component.html',
  styleUrl: './container-login-form.component.less'
})
export class ContainerLoginFormComponent {
  _fb = inject(FormBuilder)
  loginService = inject(LoginService)
  resposta?: LoginResponse
  error: string | null = null

  constructor(private router: Router) {}
  
  form = this._fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  })

  logar(){
    this.loginService.logar(
      this.form.controls.username.value!, 
      this.form.controls.password.value!
    ).subscribe({
      next: (val: LoginResponse) => {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
          localStorage.setItem('token', val.token); 
          this.resposta = val;

          if (val) { 
            this.router.navigate(['/']);
          }
        }
      },
      error: (err) => {
        this.error = "Incorrect email or password!";
      }
    })
  }
}
