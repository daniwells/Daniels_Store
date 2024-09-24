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

  changePages(pages: number){
    this.dataSent.emit(pages); 
  }
}
