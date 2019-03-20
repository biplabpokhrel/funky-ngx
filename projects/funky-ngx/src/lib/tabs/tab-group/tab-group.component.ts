import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentChecked,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { take  } from 'rxjs/operators';
import { TabComponent } from '../tab/tab.component';
import { FunkyTabService } from '../services/funky-tab.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'funky-ngx-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent implements OnInit, AfterContentChecked {
  @HostBinding('class') cssClass = 'funky-ngx-tab-group';
  @ContentChildren(TabComponent) _tabs: QueryList<TabComponent>;
  @Output() readonly selectedIndexChanged: EventEmitter<number> = new EventEmitter<number>();
  constructor(private tabService: FunkyTabService) { }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    this._tabs.forEach((tab, index) => tab.currentIndex = index);
    this.tabService._selectedTabIndex
    .pipe(take(1))
    .subscribe((index: number) => {
      this._tabs.forEach((tab, i: number) => {
        if (index === i) {
          tab.show();
          tab._content.show();
          tab._head.show();
        } else {
          tab._content.hide();
          tab._head.hide();
          tab.hide();
        }
      });
      this.selectedIndexChanged.next(index);
    });
  }
}
