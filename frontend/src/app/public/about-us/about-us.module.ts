import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ]
})
export class AboutUsModule { }
