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

  private product: Product;
  private comments: Comment[];
  private newRating: number = 5;
  private newComment: string = "";
  private isCommentHide = true;

  constructor(
      private routeInfo: ActivatedRoute,
      private productService: ProductService
    ) { }

  ngOnInit() {
    let productId = this.routeInfo.snapshot.params["id"];
    this.product =  this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  private addComment(){
    let comment = new Comment(0,this.product.id,new Date().toLocaleString(),'guest',this.newRating,this.newComment);
    this.comments.unshift(comment);
    this.initComment();
    this.updateRating();
  }

  private initComment(){
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHide = true;
  }

  private updateRating(){
    let sum = this.comments.reduce((sum,comment)=> sum + comment.rating,0);
    this.product.rating = sum / this.comments.length;
  }
}
