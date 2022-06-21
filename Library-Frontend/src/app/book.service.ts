import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http:HttpClient) { }
  getBook(){
    return this._http.get('http://localhost:5000/book')
  }
  postBook(book:any){
    return this._http.post<any>('http://localhost:5000/add',book).subscribe()
  }
  
  
}
