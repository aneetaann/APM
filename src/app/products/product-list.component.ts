import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
@Component({
    selector: 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    //properties
    pageTitle:string ='Product List';
    imageWidth: number= 50;
    imageMargin: number= 2;
    showImage: boolean= false;
    
    private _listFilter: string = '';
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter= value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[]=[];

    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "steel and aluminium",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        },
    ];
//methods.. always written after properties are written/defined in class
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.listFilter='cart';
    }

    onRatingClicked(message: string): void{
        this.pageTitle='Product List: ' + message;
    }
}
