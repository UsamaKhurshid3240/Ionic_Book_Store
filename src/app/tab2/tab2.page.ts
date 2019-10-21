import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BookListServiceService } from '../book-list-service.service';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
  
  
  constructor(private router: Router ,
    public bookListService:BookListServiceService,
    public atrCtrl: AlertController,
    public sanitizer: DomSanitizer) {}
  
  books = [];
  
  ngOnInit(){
    this.books=this.bookListService.getAllBooks();
    
  }

  
  
  
}
