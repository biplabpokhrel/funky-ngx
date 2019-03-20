import { Component,
  Renderer2,
  AfterViewInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding, ElementRef, ViewChild} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'funky-ngx-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBodyComponent implements AfterViewInit {
  private readonly _css = 'funky-ngx-tab-body';
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    // console.log(this.element.nativeElement);
    // console.log(this.renderer);
  }

  @HostBinding('class')
  get css(): string {
    return this._css;
  }

  show() {
    if (this.renderer && this.element) {
      this.renderer.setStyle(this.element.nativeElement, 'height', '100%');
      this.renderer.setStyle(this.element.nativeElement, 'overflow', 'visible');
    }
  }

  hide() {
    if ( this.renderer && this.element) {
      this.renderer.setStyle(this.element.nativeElement, 'height', '0');
      this.renderer.setStyle(this.element.nativeElement, 'overflow', 'hidden');
    }
  }


}
