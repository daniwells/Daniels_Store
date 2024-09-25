import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.less'
})
export class PaginationComponent {
  @Output() dataSent = new EventEmitter<number>();
  amountPages: number =  Number(localStorage.getItem('amountPages')) || 10;

  changePages(pages: number){
    this.dataSent.emit(pages);
    this.amountPages = pages;

    localStorage.setItem('amountPages', pages.toString());
  }
}
