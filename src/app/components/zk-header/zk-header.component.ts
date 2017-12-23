import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zk-header',
  templateUrl: './zk-header.component.html',
  styleUrls: ['./zk-header.component.scss']
})
export class ZkHeaderComponent implements OnInit {

  public title: string
  constructor() { }

  ngOnInit() {
    this.title = 'Закупка 360';
  }

}
