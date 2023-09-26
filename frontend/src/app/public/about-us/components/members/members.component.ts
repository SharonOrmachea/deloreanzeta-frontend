import { Component, OnInit } from '@angular/core';
import { Members } from 'src/app/shared/models/about-us/about-us';
import { AboutUsService } from '../../../../shared/services/about-us/about-us.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {

  members:Members[] = [];

  suscription!: Subscription;

  constructor(
    private aboutUsService: AboutUsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllMembers();

    this.suscription = this.aboutUsService.refreshAboutUs$.subscribe((res) =>{
      this.getAllMembers();
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
    });
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();
    //console.log('tour destruido');
  }

  getAllMembers(){
    this.aboutUsService.getAllMembers().subscribe(data => {
      this.members = data;
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      //console.log(error);
    })
  }

}
