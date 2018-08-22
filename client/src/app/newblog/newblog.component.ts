import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { Router} from "@angular/router"

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {
blog ={
  title: '',
  body: '',
  author: '',
  image: '',
}
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

  }
  newBlog() {
    this.dataService.newBlog(this.blog)
    this.blog = {
      title: '',
      body: '',
      author: '',
      image: '',
    }
    this.router.navigateByUrl('/admin/dashboard/bloglist')
  }
  
}
