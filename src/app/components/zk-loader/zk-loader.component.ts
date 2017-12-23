import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zk-loader',
  templateUrl: './zk-loader.component.html',
  styleUrls: ['./zk-loader.component.scss']
})
export class ZkLoaderComponent implements OnInit {
  constructor() { }
  @Input() isActive = false;
  public currentLoader: string;
  ngOnInit() {
    this.currentLoader = 'http://i.cbonds.ru/investfunds/loader.gif';
  }
}
