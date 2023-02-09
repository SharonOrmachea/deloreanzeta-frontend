import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';
import { AboutUsService } from '../../../../shared/services/about-us/about-us.service';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-members-up',
  templateUrl: './members-up.component.html',
  styleUrls: ['./members-up.component.sass']
})

export class MembersUpComponent implements OnInit {

  aboutUsForm:FormGroup;

  actionToDo = Action.NEW;

  public archivo:any = '';

  constructor(
    private aboutUsService:AboutUsService,
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.aboutUsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageUrl: [this.archivo, [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(this.data?.members.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Acerca de Nosotros';
      this.aboutUsForm.get('name')?.setValidators(null);
      this.aboutUsForm.get('profession')?.setValidators(null);
      this.aboutUsForm.get('description')?.setValidators(null);
      this.aboutUsForm.get('imageUrl')?.setValidators(null);
      this.pathFormData();
    }
  }

  saveMember(){
    let valueAboutUs = this.aboutUsForm.value;

    if(this.actionToDo == Action.NEW){
      this.aboutUsService.newMember(valueAboutUs).subscribe((res) => {
        this.toastr.success('Descripción agregada', 'About Us Agregado');
        this.aboutUsForm.reset();
      }, (error) => {
        this.toastr.error(error, 'About Us Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      const membersId = this.data?.members?.id;
      this.aboutUsService.updateMember(membersId, valueAboutUs).subscribe((res) => {
        this.toastr.success('La descripción fue editada con exito', 'About Us Editada');
      }, error => {
        console.log(error);
      })
    }

  }

  captureFile(event:any){
    this.archivo = event[0].base64;
  }

  private pathFormData():void {
    this.aboutUsForm.patchValue({
      content: this.data?.members?.content,
    })
  }

  get formControls() {
    return this.aboutUsForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.aboutUsForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.aboutUsForm);
  }

}
