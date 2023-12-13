import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScategoriesRoutingModule } from './scategories-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/ng';
import { FilePondModule } from 'ngx-filepond';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [IndexComponent, ViewComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    ScategoriesRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    CloudinaryModule,
    FilePondModule,
  ],
})
export class ScategoriesModule {}
