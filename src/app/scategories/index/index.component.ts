import { Component, OnInit, ViewChild } from '@angular/core';
import { ScategoriesService } from '../scategories.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Scategories } from '../scategories';
import { Categorie } from 'src/app/categorie/categorie';
import { CategorieService } from 'src/app/categorie/categorie.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  scategoriesAvecNomsCategories: any;
  constructor(
    public scatService: ScategoriesService,
    public categorieService: CategorieService
  ) {}
  scategorie: any;
  categorie: any;
  columns: string[] = ['imagescategorie', 'nomscategorie', '_id'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    this.scatService.getAll().subscribe((data: Scategories[]) => {
      this.scategorie = new MatTableDataSource<any>(data);
      this.scategorie.paginator = this.paginator;
      this.scategorie.sort = this.sort;
    });
    this.categorieService.getAll().subscribe((data: Categorie[]) => {});
  }
  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.scategorie.filter = filter.trim().toLowerCase();
  }
  deleteScat(_id: object) {
    this.scatService.delete(_id).subscribe((res) => {
      console.log('Post deleted successfully!');
      const data = this.scategorie.filteredData.filter(
        (item: { _id: object }) => item._id !== _id
      );
      this.scategorie = new MatTableDataSource<any>(data);
      this.scategorie.paginator = this.paginator;
      this.scategorie.sort = this.sort;
    });
  }
}
