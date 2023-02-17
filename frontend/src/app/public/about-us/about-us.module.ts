import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminAboutUsModule } from '../../Admin/admin-aboutUs/admin-about-us.module';

import { AboutUsComponent } from './pages/about-us.component';
import { MembersComponent } from './components/members/members.component';
import { OurTeamComponent } from './components/our-team/our-team.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    MembersComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminAboutUsModule
  ]
})
export class AboutUsModule { }
