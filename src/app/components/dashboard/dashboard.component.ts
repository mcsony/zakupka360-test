import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public placeholder: string;
  public query: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.placeholder = 'Поиск твитов';
  }
  onSearch ($event) {
    // получаем значение инпута
    this.query = $event.srcElement.value ;
    // переход на страницу результатов
    this.router.navigateByUrl('/search/' + this.query);
  }

}
