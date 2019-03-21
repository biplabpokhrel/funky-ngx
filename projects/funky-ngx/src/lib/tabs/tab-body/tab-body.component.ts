import {
  Component,
  Renderer2,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding, ElementRef
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'funky-ngx-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBodyComponent  {
  private readonly _css = 'funky-ngx-tab-body';
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class')
  get css(): string {
    return this._css;
  }

  show() {
    if (this.renderer && this.element) {
      this.renderer.setStyle(this.element.nativeElement, 'height', '100%');
      this.renderer.setStyle(this.element.nativeElement, 'overflow', 'visible');
      this.renderer.addClass(this.element.nativeElement, 'funky-ngx-body-selected');
    }
  }

  hide() {
    if ( this.renderer && this.element) {
      this.renderer.setStyle(this.element.nativeElement, 'height', '0');
      this.renderer.setStyle(this.element.nativeElement, 'overflow', 'hidden');
      this.renderer.addClass(this.element.nativeElement, 'funky-ngx-body-selected');
    }
  }


}
