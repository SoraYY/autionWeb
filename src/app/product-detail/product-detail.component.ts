import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../shared/product.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
      private routeInfo: ActivatedRoute,
      private productService: ProductService
    ) { }

  ngOnInit() {
    let productId = this.routeInfo.snapshot.params["id"];
    this.product =  this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  private product: Product;
  private comments: Comment[];
}
