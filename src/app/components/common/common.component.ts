import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  private requestParams ;
  public requestIsLoading ;
  public query ;
  public paramLabel = 'query' ;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.requestParams = this.activatedRoute.params.subscribe(params => {
      if (params && params[this.paramLabel]) {
        this.requestIsLoading = true;
        this.query = params[this.paramLabel];
      }else {
        /**
         * @todo show error
         */
      }
    });
  }

}
