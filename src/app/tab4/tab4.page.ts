import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookListServiceService } from '../book-list-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
 
id:string;
  name: string;
  author: string;
  edition: string;
  price: string;
  description: string;
  ii:number;

  constructor(public modalCtrl: ModalController, public bookListService:BookListServiceService,
    private router:Router,
    ) { }

  ngOnInit() {
  }
close(){
  this.modalCtrl.dismiss();
  
}

addbook(){
  const i = {
    id:this.bookListService.j.toString(),
    name: this.name,
    author: this.author,
    ed: this.edition,
    price:this.price,
    desp:this.description

   
  };
  console.log(i);
  this.bookListService.addBook(i);
  console.log(this.bookListService.j);
 this.bookListService.j+=1;

}

}
