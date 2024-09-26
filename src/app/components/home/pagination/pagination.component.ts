import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.less'
})
export class PaginationComponent {
  @Output() dataSent = new EventEmitter<{'pages':number, 'currentPage':number}>();
  amountPages: number = this.returnAmountPages();
  currentPage: number = 1;
  @Input() totalPages: number = 196;
  lastPage: number = this.calculateTotalPages();

  constructor() {
    this.amountPages = this.returnAmountPages();
  }

  calculateTotalPages() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return Math.floor(this.totalPages / this.amountPages);
    }
    return 19;
  }

  returnAmountPages(){
    let pages = localStorage.getItem('amountPages');

    if(pages){
      let pagesObj = JSON.parse(pages);
      return Number(pagesObj);
    }
    return this.amountPages = 10;
  }

  sentPages(){
    console.log(this.amountPages);
    this.dataSent.emit({'pages':this.amountPages, 'currentPage':this.currentPage});
  }

  changePages(pages: number){
    this.currentPage = 1;
    this.amountPages = pages;
    this.sentPages();
    this.lastPage = this.calculateTotalPages();
    
    localStorage.setItem('amountPages', pages.toString());
  }

  handlePageChange(page: string | number) {
    this.currentPage = Number(page);
    this.sentPages();
  }

  get paginationItems() {
    const pages = [];
    const startPage = Math.max(1, this.currentPage - 1);
    const endPage = Math.min(this.totalPages, this.currentPage + 1);
    
    if (startPage > 2) {
      pages.push(1);
      pages.push('...');
    }

    for (let i = startPage; i < endPage; i++) {
      pages.push(i);
    }

    if (endPage < this.lastPage - 1) {
      pages.push('...');
    }

    if (this.lastPage > 1 && this.currentPage < this.lastPage) {
      pages.push(this.lastPage);
    }

    return pages;
  }
}
