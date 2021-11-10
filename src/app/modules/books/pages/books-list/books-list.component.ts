import { BookService } from './../../sandBox/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'shared/models/book.model';
import { PaginationContext } from 'shared/models';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  bookData?: Book[] = [];
  dataPagination: PaginationContext = { page: 1, limit: 10, total:0 };

  selectItems: any[] = [
    {id:1,title:'دسته بندی نتایج',isActive:true},
   { id:2,title:'دسته یک',isActive:false},
   { id:3,title:'دسته دو',isActive:false}
  ];
  constructor(private BookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(){
    this.BookService.getBooks(this.dataPagination).subscribe(response => {
      if(response){
        this.bookData = response.docs;
        
      }
      else{
        console.log('no content');
        
      }
    }
    , error => {
      console.log(error);
    })
  }
}
