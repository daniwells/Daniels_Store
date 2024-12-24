import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundLoginComponent } from '../../components/login/background-login/background-login.component';
import { ContainerLoginFormComponent } from '../../containers/login/container-login-form/container-login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BackgroundLoginComponent, ContainerLoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})

export class LoginComponent {
  
}

