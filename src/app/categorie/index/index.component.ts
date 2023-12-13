import { Component, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Categorie } from '../categorie';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  })
  export class IndexComponent implements OnInit {

  constructor(public categorieService: CategorieService ) { }
  categorie:any;
  columns: string[] = ['imagecategorie','nomcategorie','_id'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
  this.categorieService.getAll().subscribe((data: Categorie[])=>{
  this.categorie = new MatTableDataSource<any>(data);
  this.categorie.paginator = this.paginator;
  this.categorie.sort = this.sort;
  })

  }
  filter(event: Event) {
  const filter = (event.target as HTMLInputElement).value;
  this.categorie.filter = filter.trim().toLowerCase();
  }

  deleteCategorie(_id:object){
    this.categorieService.delete(_id).subscribe(res => {
      console.log('Post deleted successfully!');
      const data = this.categorie.filteredData.filter((item: { _id: object;
      }) => item._id !== _id)
      this.categorie = new MatTableDataSource<any>(data)
      this.categorie.paginator = this.paginator;
      this.categorie.sort = this.sort;
    })
    }


  }

