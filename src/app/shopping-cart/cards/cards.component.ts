import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/products/products';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  products: Products[] = [];
  productOrders: any[] = [];
  constructor(private prodserv: ProductsService) {}
  ngOnInit() {
    this.loadProducts();
  }
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
  loadProducts() {
    this.prodserv.getAll().subscribe({
      next: (products: any) => {
        this.products = products;
        this.products.forEach((product) => {
          this.productOrders.push({ product: product, quantity: 0 });
        });
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
