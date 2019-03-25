import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Comment } from '../model/comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  private products: Product[] = [
    new Product(1,"Angular1",99,3,"Angular 1 detail",["编程语言","硬件设备"]),
    new Product(2,"Angular2",69,4,"Angular 2 detail",["电子设备","图书"]),
    new Product(3,"Angular3",199,3.5,"Angular 3 detail",["编程语言","硬件设备"]),
    new Product(4,"Angular4",169,3,"Angular 4 detail",["图书","图书"]),
    new Product(5,"Angular5",165,4,"Angular 5 detail",["编程语言","硬件设备"]),
    new Product(6,"Angular6",88,4.5,"Angular 6 detail",["电子设备","硬件设备"]),
  ];

  private comments: Comment[] = [
    new Comment(1,1,"2019/3/21 上午11:28:27","张三",3,"hello ！"),
    new Comment(2,1,"2019/3/21 上午11:28:27","李四",5,"hello angular1 is so beautiful！"),
    new Comment(2,2,"2019/3/21 上午11:28:27","李四",3,"hello ！"),
    new Comment(3,3,"2019/3/21 上午11:28:27","王五",3,"hello ！"),
    new Comment(4,4,"2019/3/21 上午11:28:27","赵六",3,"hello ！"),
  ];

  public getProducts(){
    return this.products;
  }

  public getProduct(id:number):Product{
    return this.products.find((product) => product.id == id);
  }

  public getCommentsForProductId(id:number): Comment[]{
    return this.comments.filter((comment:Comment) => comment.productId == id);
  }

  public getAllCategories(): string[]{
    return ["编程语言","硬件设备","图书","电子设备"];
  }

}
