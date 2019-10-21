import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab4PageModule } from '../tab4/tab4.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    Tab4PageModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage ]
})
export class TabsPageModule {}
