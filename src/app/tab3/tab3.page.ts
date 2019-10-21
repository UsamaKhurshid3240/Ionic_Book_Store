import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { BookListServiceService } from '../book-list-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
 
  
 
  constructor(private route: ActivatedRoute, private router: Router,
    public bookListService:BookListServiceService,
    public atrCtrl: AlertController) {
   
   
  }
  books = [];


  

  singleBook;


 ngOnInit() {
  this.books=this.bookListService.getBook();
    this.route.paramMap.subscribe(paramMap => {
     const val = paramMap.get("id");

      this.singleBook = this.books.find(obj => {
        return obj.id.includes(val);
        
     });
    });
  }
  
}

