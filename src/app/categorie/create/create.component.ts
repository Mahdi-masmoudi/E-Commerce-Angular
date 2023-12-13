import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';
import { CategorieModule } from '../categorie.module';
import { Router } from '@angular/router';
import { FilePondComponent } from 'ngx-filepond';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;


  display="none";
  categorie: Categorie=new Categorie();
  constructor(public categorieService: CategorieService , private router:Router) {

   }
  ngOnInit(): void {

  }
  create(){
    this.categorieService.create(this.categorie).subscribe((data=>{
      console.log(data)
      this.closeModal()
      window.location.reload();
      }))
  }


  openModal() {
    this.display = "block";
    }
    closeModal() {
    this.display = "none";
    }
    pondOptions = {
      class: 'my-filepond',
      multiple: false,
      labelIdle: 'Drop files here',
      acceptedFileTypes: 'image/jpeg, image/png',
      server: {
      process: (fieldName:any, file:any, metadata:any, load:any, error:any,
      progress:any, abort:any) => {
      const data=new FormData();
      data.append('file', file);
      data.append('upload_preset', 'Ecommerce_cloudinary');
      data.append('cloud_name', 'isetsfax')
      data.append('public_id', file.name)
      this.categorieService
      .uploadSignature(data)
      .subscribe({
      next: (res) => {
      this.categorie.imagecategorie = res.url;
      load(res);
      },
      error: (e) => {
      console.log(e);
      error(e);
      return () => {
      24
      abort();
      };
      },
      complete: () => {
      console.log('done');
      return () => {
      abort();
      };
      }
      })
      },
      revert: (uniqueFileId:any, load:any, error:any) => {
      error('Error');
      load();
      },
      }
      }
}
