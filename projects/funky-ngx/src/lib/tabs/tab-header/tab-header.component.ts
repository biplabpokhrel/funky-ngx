import { Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding,
  Renderer2,
  ElementRef,
} from '@angular/core';

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
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  show() {
    this.renderer.addClass(this.el.nativeElement, 'funky-ngx-header-selected');
  }

  hide() {
    this.renderer.removeClass(this.el.nativeElement, 'funky-ngx-header-selected');
  }
}
