import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  server_address:string = 'api';

  constructor(private _http:HttpClient) { }
  getBook(){
    return this._http.get<any>(`${this.server_address}/book`)
  }
  postBook(book:any){
    return this._http.post<any>(`${this.server_address}/add`,book).subscribe()
  }
  deleteBook(delBook:any){
    console.log(delBook)
    return this._http.delete(`${this.server_address}/book/remove/`+delBook)
  }
  editBookget(bookId:any){
    return this._http.get(`${this.server_address}/edit/`+bookId)

  }
  updateBook(updateBook:any){
    console.log("book",updateBook)
    return this._http.put(`${this.server_address}/update`,updateBook).subscribe()
  }
  
  
}
