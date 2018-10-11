import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  users = new BehaviorSubject ([]);
  products = new BehaviorSubject([]);
  blogs = new BehaviorSubject ([]);
  events = new BehaviorSubject ([]);
  usersCount = new BehaviorSubject ([]);
  blogsCount = new BehaviorSubject ([]);
  eventsCount = new BehaviorSubject ([]);
  productsCount = new BehaviorSubject ([]);

  constructor(private _http: HttpClient) { }

  getAllUsers(){
    this._http.get('/api/users/all').subscribe((response:any)=>{
      this.users.next(response)
    }) 
  }

  getAllBlogs(){
    this._http.get('/api/blogs/all').subscribe((response:any)=>{
      this.blogs.next(response)
    })
  }

  getAllProducts(){
    this._http.get('/api/products/all').subscribe((response:any)=>{
      this.products.next(response)
    })
  }

  getAllEvents(){
    this._http.get('/api/events/all').subscribe((response:any)=>{
      this.events.next(response)
    })
  }

  userCount() {
    this._http.get('/api/users/count').subscribe(
      (response: any) => { 
        this.usersCount.next(response) 
      });
  } 

  blogCount() {
    this._http.get('/api/blogs/count').subscribe(
      (response: any) => { 
        this.blogsCount.next(response) 
      });
  } 

  eventCount() {
    this._http.get('/api/events/count').subscribe(
      (response: any) => { 
        this.eventsCount.next(response) 
      });
  }

  productCount() {
    this._http.get('/api/products/count').subscribe(
      (response: any) => { 
        this.productsCount.next(response) 
      });
  }

  newProduct(product) {
    this._http.post('/api/newproduct', product).subscribe(
      (response: any) => { }
    );
  } 

  newBlog(blog) {
    this._http.post('/api/newblog', blog).subscribe(
      (response: any) => { }
    );
  }
  
  newEvent(event){
    this._http.post('/api/newevent', event).subscribe(
      (response:any)=>{}
    );
  }

  // newUser(user){
  //   this._http.post('/api/newuser', user).subscribe(
  //     (response:any)=>{}
  //   );
  // }

  removeBlog(blog, id) {
    this._http.delete('/api/blog/' + id).subscribe(
      (response: any[]) => {
        this.getAllBlogs();
       }
    );
  }

  removeProduct(product, id) {
    this._http.delete('/api/product/' + id).subscribe(
      (response: any[]) => {
        this.getAllProducts();
       }
    );
  }

  removeUser(product, id) {
    this._http.delete('/api/user/' + id).subscribe(
      (response: any[]) => {
        this.getAllUsers();
       }
    );
  }


  removeEvent(event, id) {
    this._http.delete('/api/events/' + id).subscribe(
      (response: any[]) => {
        this.getAllEvents();
       }
    );
  }

}


