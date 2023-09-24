import { Component, OnInit } from '@angular/core';
import { Members } from 'src/app/shared/models/about-us/about-us';
import { AboutUsService } from '../../../../shared/services/about-us/about-us.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {

  members:Members[] = [];

  constructor(
    private aboutUsService: AboutUsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllMembers();
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
