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

  constructor(
    private newsService: NewsService,
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toastr:ToastrService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

    this.newsForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      place: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
    });
  }

  ngOnInit(): void {
    if(this.data?.news.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Fecha';
      this.newsForm.get('date')?.setValidators(null);
      this.newsForm.get('place')?.setValidators(null);
      this.newsForm.get('city')?.setValidators(null);
      this.pathFormData();
    }
  }

  saveNews(){
    let valueNews = this.newsForm.value;

    if(this.actionToDo == Action.NEW){
      this.newsService.newNews(valueNews).subscribe((res) => {
        this.toastr.success('Nueva noticia agregada', 'Noticia Agregada');
        this.newsForm.reset();
      }, (error) => {
        this.toastr.error(error, 'news Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      const newsId = this.data?.news?.id;
      this.newsService.updateNews(newsId, valueNews).subscribe((res) => {
        this.toastr.success('La fecha fue editado con exito', 'Fecha Editada');
      }, error => {
        console.log(error);
      })
    }

  }

  private pathFormData():void {
    this.newsForm.patchValue({
      // date: this.data?.news?.date,
      // place: this.data?.news?.place,
      // city: this.data?.news?.city
    })
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
