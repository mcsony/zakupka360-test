import { Injectable } from '@angular/core';
function getWindow (): any {
  return window;
}
@Injectable()
export class DomHelperService {

  constructor() { }
  static getWinAndDocValues () {
    const win = getWindow();
    const doc = document;
    const docElt = doc.documentElement;
    const bodyElt = doc.getElementsByTagName('body')[0];
    const winX = win.innerWidth || docElt.clientWidth || bodyElt.clientWidth;
    const winY = win.innerHeight || docElt.clientHeight || bodyElt.clientHeight;
    return {win: win, doc: doc, docElt: docElt, bodyElt: bodyElt, winX: winX, winY: winY};
  }

  pxTovh (value) {
    return (100 * value) / DomHelperService.getWinAndDocValues().winY;
  }

  vhTopx (value) {
    return (DomHelperService.getWinAndDocValues().winY * value) / 100;
  }

}
