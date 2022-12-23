import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Nada para mostrar";

  @Input()
  resetLinkText = "Reset";

  @Input()
  resetLinkRoute = "";

  constructor() { }

  ngOnInit(): void {
  }

}
