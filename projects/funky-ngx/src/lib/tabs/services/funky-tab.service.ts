import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FunkyTabService {
  _selectedTabIndex: Subject<number>;
  constructor() {
    this._selectedTabIndex = new Subject<number>();
  }

}
