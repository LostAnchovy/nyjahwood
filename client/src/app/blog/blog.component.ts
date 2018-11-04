import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { BloglistComponent } from '../bloglist/bloglist.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
p: number = 1;
blogs =[]
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllBlogs()

    this.dataService.blogs.subscribe(
      (result)=> {this.blogs = result}
    );

  }
  
  
}
