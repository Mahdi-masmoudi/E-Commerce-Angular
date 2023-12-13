import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FilePondComponent } from 'ngx-filepond';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { FilePondOptions } from 'filepond';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @Input() categorieId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;
  display = 'none';

  categories: Categorie = new Categorie();
  constructor(private catSer: CategorieService) {}
  ngOnInit() {
    this.catSer.find(this.categorieId).subscribe((data) => {
      this.categories = data;
      this.updatePondFiles();
    });
  }
  updatecate = () => {
    this.catSer.update(this.categorieId, this.categories).subscribe((data) => {
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
  pondFiles: FilePondOptions['files'];
  updatePondFiles() {
    this.pondFiles = [
      {
        source: this.categories.imagecategorie,
        options: {
          type: 'local',
        },
      },
    ];
  }

  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: {
      load: (
        source: any,
        load: any,
        error: any,
        progress: any,
        abort: any,
        headers: any
      ) => {
        if (typeof source === 'string' && source !== '') {
          var myRequest = new Request(source);
          fetch(myRequest).then(function (response) {
            response.blob().then(function (myBlob) {
              load(myBlob);
            });
          });
        } else {
          error('Invalid URL');
        }
      },
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
        this.catSer.uploadSignature(data).subscribe({
          next: (res) => {
            this.categories.imagecategorie = res.url;
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
