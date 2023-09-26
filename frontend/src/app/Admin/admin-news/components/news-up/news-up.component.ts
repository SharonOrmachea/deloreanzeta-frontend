import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';
import { NewsService } from '../../../../shared/services/news/news.service';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-news-up',
  templateUrl: './news-up.component.html',
  styleUrls: ['./news-up.component.sass']
})

export class NewsUpComponent implements OnInit {

  newsForm:FormGroup;

  actionToDo = Action.NEW;

  selectedFile: File | null = null;
  archivo:string = '';

  datosLocalStorage = JSON.parse(localStorage.getItem("user")!);
  tokenLocalStorage = this.datosLocalStorage.token;


  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenLocalStorage}`
  });

  constructor(
    private newsService: NewsService,
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toastr:ToastrService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

    this.newsForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(33)]],
      content: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(this.data?.news.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Noticia';
      // this.newsForm.get('title')?.setValidators(null);
      // this.newsForm.get('content')?.setValidators(null);
      this.newsForm.get('imageUrl')?.setValidators(null);
      this.pathFormData();
    }
  }

  saveNews(){
    const valueNews = {
      imageUrl: this.archivo,
      title: this.newsForm.get('title')?.value,
      content: this.newsForm.get('content')?.value
    };

    if(this.actionToDo == Action.NEW){
      this.newsService.newNews(valueNews, this.headers).subscribe((res) => {
        this.toastr.success('Nueva noticia agregada', 'Noticia Agregada');
        this.newsForm.reset();
      }, (error) => {
        this.toastr.error(error, 'News Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      const newsId = this.data?.news?.id;
      this.newsService.updateNews(newsId, valueNews, this.headers).subscribe((res) => {
        this.toastr.success('La noticia fue editada con exito', 'Noticia Editada');
      }, error => {
        this.toastr.error(error, 'News Failed');
      })
    }

    this.dialog.closeAll();

  }

  // npm i alife-file-to-base64 --save
  // importar modulo: AlifeFileToBase64Module
  // en el input se agrega un atributo llamado alife-file-to-base64 y si se quieren cargar multiples archivos le agregamos multiple al input

  captureFile(event:any): void{
    //this.archivo = event[0].base64;
    this.selectedFile = event.target.files[0];
    if(this.selectedFile){
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.archivo = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  private pathFormData():void {
    this.newsForm.patchValue({
      title: this.data?.news?.title,
      content: this.data?.news?.content,
    });
    this.archivo = this.data?.news?.imageUrl;
  }


  get formControls() {
    return this.newsForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.newsForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.newsForm);
  }


}
