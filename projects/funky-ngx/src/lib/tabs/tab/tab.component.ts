import {
  Component,
  OnInit, Input,
  HostBinding,
  ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter, Optional, ContentChild } from '@angular/core';
import { FunkyTabService } from '../services/funky-tab.service';
import { TabBodyComponent } from '../tab-body/tab-body.component';
import { TabHeaderComponent } from '../tab-header/tab-header.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'funky-ngx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit {
  @HostBinding('class') cssClass = 'funky-ngx-tab';
  @Input() label: string;
  isActive: boolean;
  currentIndex: number;
  @ContentChild(TabBodyComponent) _content: TabBodyComponent;
  @ContentChild(TabHeaderComponent) _head: TabHeaderComponent;

  @Output() readonly index: EventEmitter<number> = new EventEmitter<number>();
  constructor(@Optional() private tabService: FunkyTabService) { }

  ngOnInit() {
  }

  clickedTab(status?: boolean) {
    this.isActive = status || true;
    this.index.emit(this.currentIndex);
    if ( this.tabService ) {
      this.tabService._selectedTabIndex.next(this.currentIndex);
    }
    this._content.cssClass = this.isActive;
  }
}
