import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/categorie/categorie';
import { Products } from 'src/app/products/products';
import { CategorieService } from 'src/app/categorie/categorie.service';
import { ProductsService } from 'src/app/products/products.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  categories: any[] = [];
  products: any[] = [];
  selectedCategorieId: string | null = null;

  constructor(
    private categorieService: CategorieService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.categorieService.getAll().subscribe((data: any) => {
      this.categories = data;
    });
    this.productsService.getAll().subscribe((data: Products[]) => {});
  }
}
