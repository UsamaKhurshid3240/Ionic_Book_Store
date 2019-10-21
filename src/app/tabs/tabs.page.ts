import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';

import { Tab3PageModule } from '../tab3/tab3.module';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab4Page } from '../tab4/tab4.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalCtrl: ModalController) {}
  async openModal() {
    let myModal = this.modalCtrl.create({component:Tab4Page});
    (await myModal).present();
  }
 
}
