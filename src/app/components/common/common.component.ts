import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TwitsService } from '../../services/twits/twits.service';
import { Twit } from '../../models/twit';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
  providers: [TwitsService]
})
export class CommonComponent implements OnInit {

  private requestParams ;
  public requestIsLoading ;
  public query ;
  public emptyMessage = 'Нет данных.';
  public paramLabel = 'query' ;
  public twits: Array<Twit>;
  public headers = [
    {field: 'text', header: 'Твит'}
  ];
  constructor(private activatedRoute: ActivatedRoute, private twitsService: TwitsService) { }

  ngOnInit() {
    this.requestParams = this.activatedRoute.params.subscribe(params => {
      if (params && params[this.paramLabel]) {
        this.requestIsLoading = true;
        this.query = params[this.paramLabel];
        this.search(this.query);
      }else {
        /**
         * @todo show error
         */
      }
    });
  }
  search (query: string) {
    console.log(query)
    this.twitsService.search(query).then((twits) => {
      if (twits) {
        this.twits = twits;
      }
      this.requestIsLoading = false;
    });
  }

}
