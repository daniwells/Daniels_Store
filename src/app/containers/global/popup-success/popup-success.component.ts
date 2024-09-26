import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-success.component.html',
  styleUrl: './popup-success.component.less'
})
export class PopupSuccessComponent {
  @Input() showPopup: boolean = false;
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}
