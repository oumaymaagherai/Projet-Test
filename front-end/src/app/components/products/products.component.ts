import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { CoreService } from 'src/app/services/core/core.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductDeleteConfirmationComponent } from '../product-delete-confirmation/product-delete-confirmation.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  displayedColumns: string[] = ['action', 'id', 'name', 'description','brand', 'price'];
  dataSource!: MatTableDataSource<Product>;

  constructor(
    private _productService: ProductsService,
    private _dialog: MatDialog,
    private _coreService: CoreService,

  ) { }
  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this._productService.getAllProduct().subscribe(productList => {
      this.dataSource = new MatTableDataSource<Product>(productList);
    })
  }

  openUpdateProduct(product: Product) {
    const dialogref = this._dialog.open(ProductEditComponent, {
      data: product,
    });
    dialogref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this._coreService.openSnackBar('Product Updated Successfully !  ', 'OK');
          this.refreshTable();
        }
      }
    })
  }
  deleteProduct(id: number) {
    const dialogRef = this._dialog.open(ProductDeleteConfirmationComponent,{
      data : "fournisseur",
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this._productService.deleteProduct(id).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Product deleted successfully', 'OK');
            this.refreshTable();

          }, error: (err: any) => {
            console.error(err);
          }
        })
      }
    });
  }
}
