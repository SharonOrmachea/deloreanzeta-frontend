import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Members } from '../../../../shared/models/about-us/about-us';
import { AboutUsService } from '../../../../shared/services/about-us/about-us.service';
import { MembersUpComponent } from '../members-up/members-up.component';

@Component({
  selector: 'app-admin-list-members',
  templateUrl: './admin-list-members.component.html',
  styleUrls: ['./admin-list-members.component.sass']
})
export class AdminListMembersComponent implements OnInit {

  members:Members[] = [];

  constructor(
    private aboutUsService:AboutUsService,
    private toastr:ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllMembers();
  }

  getAllMembers(){
    this.aboutUsService.getAllMembers().subscribe(data => {
      this.members = data;
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      //console.log(error)
    })
  }

  openModal(members={}):void {
    this.dialog.open(MembersUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Integrante', members}
    });
  }

  deleteMember(id:any){
    this.aboutUsService.deleteMember(id).subscribe(data => {
      this.toastr.success('El Integrante fue eliminado con exito', 'Integrante Eliminado');
      this.getAllMembers();
    }, error => {
      this.toastr.success(error, 'Failed Delete');
    })
  }

}
