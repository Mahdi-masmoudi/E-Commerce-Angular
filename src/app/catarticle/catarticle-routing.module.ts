import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { authGuard } from '../authentification/auth.guard';

const routes: Routes = [
  { path: 'catarticle', redirectTo: 'catarticle/index', pathMatch: 'full' },
  {
    path: 'catarticle',
    component: IndexComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatarticleRoutingModule {}
