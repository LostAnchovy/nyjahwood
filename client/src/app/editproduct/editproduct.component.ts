import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditproductComponent implements OnInit {
product: any = {}
  constructor(private _http: HttpClient, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['productId']); 
  }

  getProduct(id) {
    this._http.get('/api/product/' + id).subscribe(data => {
      this.product = data;
      console.log(this.product)
    });
  }
  
  updatedProduct(id) {
    this.product.updatedAt = Date.now();
    this._http.put('/api/product/'+ id, this.product)
      .subscribe(res => {
        console.log(res)
          this._router.navigate(['/admin/dashboard']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
