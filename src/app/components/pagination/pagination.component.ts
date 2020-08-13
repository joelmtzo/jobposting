import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();;
  @Input() pagination = [];
  @Input() page = 0;

  cambiarPagina(link){
    this.onPageChange.emit(link);
  }
}
