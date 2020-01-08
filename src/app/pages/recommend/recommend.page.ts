import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { debug } from 'util';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.page.html',
  styleUrls: ['./recommend.page.scss'],
})
export class RecommendPage implements OnInit {

  products:any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
     this.productService.loadProducts();
    //  this.products =this.productService.products;
  }

}
