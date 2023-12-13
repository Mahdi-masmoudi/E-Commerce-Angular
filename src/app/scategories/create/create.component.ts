import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilePondComponent } from 'ngx-filepond';
import { Scategories } from '../scategories';
import { CategorieService } from 'src/app/categorie/categorie.service';
import { ScategoriesService } from '../scategories.service';
import { Categorie } from 'src/app/categorie/categorie';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;

  display = 'none';
  scategorie: Scategories = new Scategories();
  categories: Categorie[];
  constructor(
    public categorieService: CategorieService,
    private scatserv: ScategoriesService
  ) {}
  ngOnInit() {
    this.loadcategorie();
  }
  loadcategorie() {
    return (
      this.categorieService
        .getAll()
        .subscribe((data: Categorie[]) => (this.categories = data)),
      (error: any) => console.log(error)
    );
  }
  ajoutscat = () => {
    this.scatserv.create(this.scategorie).subscribe((data) => {
      console.log(data);
      this.closeModal();
      window.location.reload();
    });
  };
  openModal() {
    this.display = 'block';
  }
  closeModal() {
    this.display = 'none';
  }

  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: {
      process: (
        fieldName: any,
        file: any,
        metadata: any,
        load: any,
        error: any,
        progress: any,
        abort: any
      ) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce_cloudinary');
        data.append('cloud_name', 'iset-sfax');
        data.append('public_id', file.name);
        this.categorieService.uploadSignature(data).subscribe({
          next: (res) => {
            //this.categories.imagescategorie = res.url;
            load(res);
          },
          error: (e) => {
            console.log(e);
            error(e);
            return () => {
              abort();
            };
          },
          complete: () => {
            console.log('done');
            return () => {
              abort();
            };
          },
        });
      },
      revert: (uniqueFileId: any, load: any, error: any) => {
        error('Error');
        load();
      },
    },
  };
}
