import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { authGuard } from '../authentification/auth.guard';

const routes: Routes = [
  { path: 'categories', redirectTo: 'categories/index', pathMatch: 'full' },
  { path: 'categories', component: IndexComponent, canActivate: [authGuard] },
  { path: 'categories/create', component: CreateComponent },
  { path: 'categories/:categorieId/view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieRoutingModule {}
