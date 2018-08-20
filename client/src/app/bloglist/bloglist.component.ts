import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogs;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllBlogs()

    this.dataService.blogs.subscribe(
      (blogs)=> {this.blogs = blogs;}
    );
    //binds the blogs objects to the 
  }

}
