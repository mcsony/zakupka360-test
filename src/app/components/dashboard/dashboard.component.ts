import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public placeholder: string;
  public query: string;
  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.placeholder = 'Поиск твитов';
    this.query = '';
  }
  onChange ($event) {
    // получаем значение инпута
    this.query = $event.srcElement.value ;
  }
  search () {
    if (this.query.length < 1) {
      this.messageService.add({severity: 'warn', summary: 'Предупреждение', detail: 'Пустое значение поиска'});
      return ;
    }
    // переход на страницу результатов
    this.router.navigateByUrl('/search/' + this.query);
  }

}
