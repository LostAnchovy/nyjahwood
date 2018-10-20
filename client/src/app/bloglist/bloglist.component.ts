import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogs
  constructor(private _dataService: DataService, private _router: Router) { }

  removeBlog(blog, id){
    this._dataService.removeBlog(blog, id)
    this.ngOnInit()
  }


  ngOnInit() {
    this._dataService.getAllBlogs()

    this._dataService.blogs.subscribe(
      (blogs)=> {this.blogs = blogs;}
    );
    //binds the blogs objects to empyt this.blogs inside ts file
  }

}
