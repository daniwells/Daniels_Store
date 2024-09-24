import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input-login.component.html',
  styleUrl: './input-login.component.less'
})
export class InputLoginComponent {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "";
  @Input() formControl: FormControl = new FormControl();
}
