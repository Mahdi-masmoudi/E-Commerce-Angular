import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieModule } from './categorie/categorie.module';
import { CatarticleModule } from './catarticle/catarticle.module';
import { ProductsModule } from './products/products.module';
import { ScategoriesModule } from './scategories/scategories.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    CategorieModule,
    CatarticleModule,
    ScategoriesModule,
    AuthentificationModule,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
