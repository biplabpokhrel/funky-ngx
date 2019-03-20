import { NgModule } from '@angular/core';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  declarations: [],
  imports: [
    TabsModule
  ],
  exports: [TabsModule]
})
export class FunkyNgxModule { }

export const FunkyNgxTabsModule = TabsModule;
