import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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

  selectedFile: File | null = null;
  archivo:string = '';

  constructor(
    private aboutUsService:AboutUsService,
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toastr:ToastrService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.aboutUsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      profession: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(790)]],
      imageUrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(this.data?.members.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Integrante';
      this.aboutUsForm.get('name')?.setValidators(null);
      this.aboutUsForm.get('profession')?.setValidators(null);
      this.aboutUsForm.get('description')?.setValidators(null);
      this.aboutUsForm.get('imageUrl')?.setValidators(null);
      this.pathFormData();
    }
  }

  saveMember(){
    const valueMembers = {
      name: this.aboutUsForm.get('name')?.value,
      profession: this.aboutUsForm.get('profession')?.value,
      description: this.aboutUsForm.get('description')?.value,
      imageUrl: this.archivo,
    };

    if(this.actionToDo == Action.NEW){
      this.aboutUsService.newMember(valueMembers).subscribe((res) => {
        this.toastr.success('Integrante agregado', 'Integrante Agregado');
        this.aboutUsForm.reset();
      }, (error) => {
        this.toastr.error(error, 'About Us Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      const membersId = this.data?.members?.id;
      this.aboutUsService.updateMember(membersId, valueMembers).subscribe((res) => {
        this.toastr.success('Los datos del integrante fueron editados con exito', 'Integrante Editado');
      }, error => {
        this.toastr.error(error, 'About Us Failed');
      })
    }

    this.dialog.closeAll();

  }

  captureFile(event:any): void{
    //this.archivo = event[0].base64;
    this.selectedFile = event.target.files[0];
    //console.log(this.aboutUsForm.get('imageUrl')?.value)
    //console.log('selectedFile antes del if: ', this.selectedFile)
    if(this.selectedFile){
      const reader = new FileReader();
      //console.log('reader en el if: ', reader)
      reader.onload = (e:any) => {
        this.archivo = e.target.result;
        //console.log('this.archivo en el if: ', this.archivo)
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  private pathFormData():void {
    this.aboutUsForm.patchValue({
      name: this.data?.members?.name,
      profession: this.data?.members?.profession,
      description: this.data?.members?.description,
    });
    this.archivo = this.data?.members?.imageUrl;
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
