import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {

  @Input()
  title = "";

  @Input()
  visible = false;

  @Input()
  titleButton = "";

  @Input()
  resetLinkRoute = "";

  constructor() { }

  ngOnInit(): void {
  }

}
