import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { Router} from "@angular/router"

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {
newblog ={
  title: '',
  body: '',
  author: '',
  image: '',
}
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

  }
  newBlog() {
    this.dataService.newBlog(this.newBlog)
    this.newblog ={
      title: '',
      body: '',
      author: '',
      image: '',
    }
    this.router.navigateByUrl('/admin/dashboard/bloglist')
  }

  // newProduct(){
  //   this._dataService.newProduct(this.product)
  //   this.product ={
  //     name:'',
  //     description:'',
  //     price:''
  //   }
  //   this._router.navigateByUrl('/admin/dashboard')
  // }

}
