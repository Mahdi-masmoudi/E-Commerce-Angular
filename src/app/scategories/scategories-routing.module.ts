import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from '../authentification/auth.guard';

const routes: Routes = [
  { path: 'scategorie', redirectTo: 'scategorie/index', pathMatch: 'full' },
  {
    path: 'scategorie/index',
    component: IndexComponent,
    canActivate: [authGuard],
  },
  { path: 'scategorie/:scategorieId/view', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScategoriesRoutingModule {}
