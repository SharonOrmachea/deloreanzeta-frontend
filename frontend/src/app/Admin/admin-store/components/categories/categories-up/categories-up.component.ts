import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/services/store/category/category.service';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-categories-up',
  templateUrl: './categories-up.component.html',
  styleUrls: ['./categories-up.component.sass']
})
export class CategoriesUpComponent implements OnInit {

  categoriesForm!:FormGroup;

  actionToDo = Action.NEW;

  constructor(
    private categoriesService:CategoryService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService,
    private validatorService:ValidationsService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.categoriesForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if(this.data?.tour.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Categoría';
      this.categoriesForm.get('name')?.setValidators(null);
      this.pathFormData();
    }
  }

  saveCategory(){
    if(this.actionToDo == Action.NEW){
      const valueCategory = this.categoriesForm.value;
      this.categoriesService.newCategory(valueCategory).subscribe((res) => {
        this.toastr.success('Nueva categoría agregada', 'Categoría Agregada');
        this.categoriesForm.reset();
      }, (error) => {
        this.toastr.error(error, 'Categories Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      const valueCategory = this.categoriesForm.value;
      const categoryId = this.data?.tour?.id;
      this.categoriesService.updateCategory(categoryId, valueCategory).subscribe((res) => {
        this.toastr.success('La categoría fue editada con exito', 'Categoría Editada');
      }, error => {
        this.toastr.error(error, 'Se produjo un error');
        //console.log(error);
      })
    }

  }

  private pathFormData():void {
    this.categoriesForm.patchValue({
      category: this.data?.category?.category,
    });

  }

  get formControls() {
    return this.categoriesForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.categoriesForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.categoriesForm);
  }



}
