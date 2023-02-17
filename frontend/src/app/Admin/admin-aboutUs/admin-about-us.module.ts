import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDialogModule } from '@angular/material/dialog';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { MembersUpComponent } from './components/members-up/members-up.component';
import { AdminListMembersComponent } from './components/admin-list-members/admin-list-members.component';

@NgModule({
  declarations: [
    MembersUpComponent,
    AdminListMembersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMomentDateModule,
    MatDialogModule,
    AlifeFileToBase64Module
  ],
  exports:[
    AdminListMembersComponent
  ]
})
export class AdminAboutUsModule { }
