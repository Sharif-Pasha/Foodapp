  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteProductService } from 'src/app/ManagerServices/delete-product.service';
import { ListProductService } from 'src/app/ManagerServices/list-product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  result:any;
  error:any;
  errorMsg:any;
  constructor(private products:ListProductService, private data:DeleteProductService, private router : Router) { }

  ngOnInit(): void {
  
    this.products.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);
      
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message
      console.log(this.errorMsg);
      
      
    })
  }
  deleteProduct(id:any){
    this.data.deleteData(id).subscribe((res)=>{
      console.log(res);
      
    })
  }
}
