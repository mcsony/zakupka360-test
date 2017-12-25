import { Component, OnInit } from '@angular/core';
import { DomHelperService } from '../../services/dom/dom.helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  publictitle = 'app';
  public layoutWrapperHeight: string;
  public bg= 'red';

  constructor (private domHelperService: DomHelperService) {}
  ngOnInit () {
    this.layoutWrapperHeight = (100 - this.domHelperService.pxTovh(70)) + 'vh';
    console.log(this.layoutWrapperHeight);
  }
}
