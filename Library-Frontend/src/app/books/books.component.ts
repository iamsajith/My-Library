import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Booklist : BookModel[] | any 

  constructor(private _book:BookService) { }

  ngOnInit(): void {
    this._book.getBook().subscribe((data)=>{
      this.Booklist = JSON.parse(JSON.stringify(data))
      console.log(this.Booklist)
    })
  }

}
