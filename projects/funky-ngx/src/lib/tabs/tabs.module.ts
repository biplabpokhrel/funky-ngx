import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TabBodyComponent } from './tab-body/tab-body.component';
import { FunkyTabService } from './services/funky-tab.service';

const PUBLIC_ACCESS  = [
  TabComponent,
  TabGroupComponent,
  TabHeaderComponent,
  TabBodyComponent
];

@NgModule({
  declarations: PUBLIC_ACCESS,
  imports: [
    CommonModule
  ],
  providers: [ FunkyTabService ],
  exports: PUBLIC_ACCESS
})
export class TabsModule { }
