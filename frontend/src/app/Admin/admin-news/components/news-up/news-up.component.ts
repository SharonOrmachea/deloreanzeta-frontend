import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  public archivo:any = '';

  titulo:any = undefined;

  contenido:any = undefined;

  constructor(
    private newsService: NewsService,
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

    this.newsForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(this.data?.news.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Noticia';
      this.newsForm.get('title')?.setValidators(null);
      this.newsForm.get('content')?.setValidators(null);
      this.newsForm.get('imageUrl')?.setValidators(null);
      this.pathFormData();
    }
  }

  saveNews(){
    const valueNews = {imageUrl:this.archivo, title: this.newsForm.get('title')?.value, content: this.newsForm.get('content')?.value};

    if(this.actionToDo == Action.NEW){
      this.newsService.newNews(valueNews).subscribe((res) => {
        this.toastr.success('Nueva noticia agregada', 'Noticia Agregada');
        this.newsForm.reset();
      }, (error) => {
        this.toastr.error(error, 'News Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      const newsId = this.data?.news?.id;
      this.newsService.updateNews(newsId, valueNews).subscribe((res) => {
        this.toastr.success('La noticia fue editada con exito', 'Noticia Editada');
      }, error => {
        console.log(error);
      })
    }

  }

  private pathFormData():void {
    this.newsForm.patchValue({
      title: this.data?.news?.title,
      content: this.data?.news?.content,
      imageUrl: this.data?.news?.imageUrl
    })
  }

  // npm i alife-file-to-base64 --save
  // importar modulo: AlifeFileToBase64Module
  //en el input se agrega un atributo llamado alife-file-to-base64 y si se quieren cargar multiples archivos le agregamos multiple al input

  // (onFileChanged)="captureFile($event)"

  captureFile(event:any){
    this.archivo = event[0].base64;
  }

  // captureFile(event:any){
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.archivo = reader.result as string;
  //   }
  //   this.archivo =
  //   console.log(reader);

  // }

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
