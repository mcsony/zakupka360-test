import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppSettings } from '../../../settings';
import { Twit } from '../../models/twit';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class TwitsService {

  constructor(private http: Http, private messageService: MessageService) { }
  public static getHeaders() {
    const headers = new Headers();
    headers.append(AppSettings.getConfig()['DEFAULT_HEADER_KEY'], (AppSettings.getConfig()['HEADER_PREFIX'] +
      AppSettings.getConfig()['DEFAULT_HEADER_VALUE']));
    return new RequestOptions({headers: headers});
  }
  search(query): Promise<any> {
   return this.http
      .get(AppSettings.getConfig()['TWITS_URL'] + '?q=' + query +
        '&count=' + AppSettings.getConfig()['TWITS_LIMIT'] ,
        TwitsService.getHeaders())
      .toPromise()
      // .then(response => response.json() as Organization[])
      .then(function (response) {
        const res = response.json();
        let data, decoded;
        try {
          decoded = JSON.parse(res.result) as Twit[];
          data = decoded.statuses as Twit[];
        } catch (err) {}

        return data;
      })
      .catch((error) => {
      let message = 'ошибка при получении твитов.';
      if (parseInt(error.status, 10) === 0) {
        message += ' Убедитесь что файл /backend/index.js запушен.';
      }
      this.showToast(message, 'error');
   });

  }
  showToast(message, severity, summary = 'Ошибка') {
    this.messageService.add({severity: severity, summary: summary, detail: message});
  }
}
