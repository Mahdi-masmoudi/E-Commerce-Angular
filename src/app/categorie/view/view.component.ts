import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  @Input() categorieId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = 'none';
  categori: Categorie = new Categorie();
  constructor(private catser: CategorieService) {}
  ngOnInit() {
    this.catser.find(this.categorieId).subscribe((data) => {
      this.categori = data;
    });
  }
  openModal() {
    this.display = 'block';
  }
  closeModal() {
    this.display = 'none';
  }
}
