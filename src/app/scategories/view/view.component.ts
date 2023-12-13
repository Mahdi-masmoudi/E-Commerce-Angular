import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Scategories } from '../scategories';
import { ScategoriesService } from '../scategories.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  @Input() scategorieId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = 'none';
  scategories: Scategories = new Scategories();

  constructor(private scategoriesS: ScategoriesService) {}

  ngOnInit() {
    this.scategoriesS.getAll().subscribe((data: Scategories[]) => {
      this.scategorieId = new MatTableDataSource<any>(data);
    });
  }

  openModal() {
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }
}
