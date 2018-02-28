import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ?
            this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];

    constructor(private _productService: ProductService) {
    }

    toggleImage(): void {
       this.showImage = !this.showImage;
    }

    ngOnInit() {
        this._productService.getProducts()
            .subscribe( products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any> error);

    }
    
    performFilter(filterBy: string): IProduct[] {
       filterBy = filterBy.toLocaleLowerCase();
       return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Prodcut List: ' + message;
    }

}
