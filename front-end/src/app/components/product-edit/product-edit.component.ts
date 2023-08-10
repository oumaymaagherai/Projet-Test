import { Component,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent  {
  productForm: FormGroup ;
   labelContenu: string ='';
   showLabel: boolean = false;
 
   constructor(private _fb: FormBuilder,
     private _productService: ProductsService,
     private _dialogRef: MatDialogRef<ProductEditComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
 
     ) {
       this.productForm = this._fb.group({
         id : 0,
         name: '',
         description: '',
         brand :'',
         price: undefined,
       })
   }
 
 
 
 
   ngOnInit(): void {
     this.productForm.patchValue(this.data) ; 
 
   }
 
   onFormSubmit(){
     if(this.productForm.valid){
       this._productService.updateProduct(this.productForm.value).subscribe({
         next : (val : any)=>{
           this._dialogRef.close(true)
         },error: (err: any) => {
           console.error(err);
           this.failedLabel("Values not valid");
         }
       })
     }
   }
   failedLabel(message: string) {
     this.labelContenu = message;
     this.showLabel = true;
     setTimeout(() => {
       this.showLabel = false;
     }, 10000);
   }
 }
 