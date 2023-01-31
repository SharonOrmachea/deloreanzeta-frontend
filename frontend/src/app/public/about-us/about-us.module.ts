import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './pages/about-us.component';
import { UsComponent } from './components/us/us.component';
import { DrummerComponent } from './components/drummer/drummer.component';
import { GuitaristComponent } from './components/guitarist/guitarist.component';
import { MembersComponent } from './components/members/members.component';
import { OurTeamComponent } from './components/our-team/our-team.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    UsComponent,
    DrummerComponent,
    GuitaristComponent,
    MembersComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
