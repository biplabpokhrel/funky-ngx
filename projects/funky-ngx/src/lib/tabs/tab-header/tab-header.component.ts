import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, HostBinding} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'funky-ngx-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabHeaderComponent implements OnInit {
  @HostBinding('class') cssClass = 'funky-ngx-tab-header';
  constructor() { }

  ngOnInit() {
  }

}
