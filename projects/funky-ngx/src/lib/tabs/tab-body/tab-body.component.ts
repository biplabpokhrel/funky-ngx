import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, HostBinding} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'funky-ngx-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBodyComponent implements OnInit {
  private readonly _css = 'funky-ngx-tab-body';
  constructor() { }

  ngOnInit() {
  }

  @HostBinding('class')
  get css(): string {
    return this._css;
  }

  set cssClass(status: boolean) {
    // this._css = status
    // ? '.funky-ngx-tab-group :active .funky-ngx-tab-header + .funky-ngx-tab-body'
    // : '.funky-ngx-tab-group .funky-ngx-tab-header + .funky-ngx-tab-body';
  }


}
