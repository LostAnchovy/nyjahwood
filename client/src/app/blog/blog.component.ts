import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogs =[]
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllBlogs()

    this.dataService.blogs.subscribe(
      (blogs)=> {this.blogs = blogs;}
    );

  }

}
