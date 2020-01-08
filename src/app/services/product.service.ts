import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products:any;
  constructor(private http: HttpClient) { }

  loadProducts():any {
    if(this.products){
      return this.products;
    } else {
      return this.http.get('assets/data/data.json').subscribe((data)=>{
        console.log(data);
        // this.products = data
        
      });
    }
  }
  

}

class Product{
  name:string
  age:number
}
