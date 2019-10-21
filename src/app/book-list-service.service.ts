import { Injectable } from '@angular/core';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Tab2Page } from './tab2/tab2.page';
import { Tab2PageModule } from './tab2/tab2.module';

@Injectable({
  providedIn: 'root'
})
export class BookListServiceService {
  
 j=18;

  books = [
    { id: '1', name: 'Java: A beginner’s guide',author:'Herbert Schildt',ed:'4' ,desp:'First, you’ll need to learn about Java Programming language, as it is mainly used in Android development. Bestselling programming author Herb Schildt, will guide you from the basics of creating, compiling and running a java program.Java: A beginner’s guide also includes more advanced features: multithreaded programming, generics, Swing or lambda expressions, for instance.',price:'$80.80'},
    { id: '2', name: 'Learning Java by Building Android Games' ,author:'Jhon Horton',ed:'6',desp:'This book is aimed at beginners as well, so you can get a solid grasp of the Java language and its foundation APIs. It is oriented to teach you Java by learning the process of game development. You’ll build 4 games for your phone and tablet: one educational math test, one memory alike game and two retro-style games.',price:'$200'},
    { id: '3', name: 'Thinking In Java',author:'Bruce Eckel',ed:'4',desp:'An award-winning book and claimed as one of the most complete guides to learn about Java. This is both a theoretical and practical piece that teaches you the real meaning of “Thinking in Java”.From the fundamentals of Java syntax and Objective Oriented Programming principles to its most advanced features, it will guide you, with many examples, one step at a time.',price:'$150' },
    { id: '4', name: 'Android Programming For Beginners ',author:'Jhon Horton',ed:'3',desp:'This book will introduced to Java Programming via Android, and will guide through the process of creating an Android app considering you an absolute beginner. You will learn by building three real-world app and over 40 mini apps to code and run.',price:'$97.10'},
    { id: '5', name: ' Hello, Android: Introducing Google’s Mobile Development Platform',author:'Ed,Burnette',ed:'9' ,desp:'Considered as one of the top books to learn Android programming is great on explaining basic Android concepts. Hello, Android also teaches you how to create animated user interfaces, add music and sound effects, build location-based services and more. You’ll be introduced to the Google Play Store as well.',price:'140.40'},
    { id: '6', name: 'Head First Android Development: A Brain-Friendly Guide' ,author:'Dawn Griffiths & David Griffiths',ed:'12',desp:'A visually-approaching book, perfect for those who are more likely to learn with images and memory tricks. This book teaches you about structure, design or database using cognitive science. Knowledge of Java is required, due they have another guide called Head First Java.',price:'$77'},
    { id: '7', name: 'Android Programming The Big Nerd Ranch Guide',author:'Bill Phillips & Brian Hardy' ,ed:'2',desp:'We asked Adrián Catalán, GDE and Instructor of the Android App Development for beginners course, for one of his recommendations and he mentioned this one. This is considered by many developers as one of the best introductory books you can find about Android Programming, although you need to be familiar with Java.This guide is based on an Android bootcamp course taught by experts developers from the Big Nerd Ranch, and it . will provide you good techniques for app development and it will clarify you key concepts and API´s on android.',price:''},
    { id: '8', name: 'The Busy Coder’s Guide to Android Development' ,author:'Mark L.Murphy',ed:'4',desp:'This book covers the latest version of Android Studio and the latest version of Android Nougat. With more than 200 chapters, it will guide you from your beginnings to an advanced level, learning about techniques, development tools, user interface, database and more.',price:'$102'},
    { id: '9', name: 'Android Programming: Pushing the Limits',author:'Wiley' ,ed:'4',desp:'If you are an advanced developer and wish to know what you are really capable of, this option is for you. Android Programming: Pushing the Limits will teach you about best practices and how to create more intuitive and innovate apps. This is a great choice if you want to push the boundaries of Android programming, be more efficient and a better developer.',price:'$55.60'},
    { id: '10', name: 'Professional Android' ,author:'Reto Meier ',ed:'3',desp:'Another book recommended by Catalán was the newest edition of Professional Android which is expected to be released next june. This book will show you how to take the most out of the latest features of Android to create robust and compelling apps.Through a series of projects, you’ll be introduced to new features of Android platform, gradually learning how to build real-world applications.Certainly, reading a book is a great way to learn since many of them provide structure and a step-by-step guide on how to program for Android. However, it is true that books are more likely to become outdated according to the way technology advances today. For this reason, enrolling in updated courses of Android can be a better option for beginners or advanced developers.',price:'$67.43'},
    { id: '11', name: 'Xamarin Mobile Application Development: Cross-Platform C# and Xamarin.Forms Fundamentals',author:'Dan Hermes' ,ed:'6',desp:'Xamarin Mobile Application Development is a hands-on Xamarin.Forms primer and a cross-platform reference for building native Android, iOS, and Windows Phone apps using C# and .NET. ...',price:'$57'},
    { id: '12', name: 'Xamarin Mobile Application Development for Android' ,author:'Mark Reynolds',ed:'13',desp:'A step-by-step tutorial that follows the development of a simple Android app from end to end, through troubleshooting, and then distribution. The language used assumes a knowledge of basic C#. ...',price:'$39.90'},
    { id: '13', name: 'Creating Mobile Apps with Xamarin.Forms, Preview Edition',author:'Charles Petzold' ,ed:'7',desp:'This second Preview Edition ebook, now with 16 chapters, is about writing applications for Xamarin.Forms, the new mobile development platform for iOS, Android, and Windows phones unveiled by Xamarin in May 2014. ... ',price:'$99' },
    { id: '14', name: 'Xamarin 4.x Cross-Platform Application Development' ,author:'Jonathan Peppers',ed:'10',desp:'Develop powerful cross-platform applications with XamarinAbout This BookWrite native cross-platform applications with XamarinDesign user interfaces that can be shared across Android, iOS, and Windows ...',price:'$60'},
    { id: '15', name: 'Xamarin Essentials',author:'Mark Reynolds' ,ed:'9',desp:'If you are an experienced iOS and Android developer and have a desire to learn about the Xamarin platform, then you will find this tutorial to be the most efficient, interesting, and relevant path. ...',price:'$17'},
    { id: '16', name: 'Beginning Ionic Mobile Development' ,author:'Greg Lim' ,ed:'9',desp:'Ionic is one of the leading frameworks to develop mobile apps and Progressive Web Apps in HTML5. Ionic is especially useful if you are familiar with web development HTML, CSS, JavaScript and would like to build mobile apps, but dont fancy having to learn Objective C and/or Swift for iOS, Java for Android, etc. In this book, we take you on a fun, hands-on and pragmatic journey to master Ionic. You will start building Ionic apps within minutes. Every section is written in a bite-sized manner and straight to the point as I dont want to waste your time (and most certainly mine) on the content you dont need. In the end, you will have what it takes to develop a real-life mobile app using Ionic. ',price:'$39'},
    { id: '17', name: 'Ionic:Hybrid Mobile App Development Learning Path' ,author:'Rahat Khanna & Sani Yusuf' ,ed:'15',desp:'	Hybrid Apps are a promising choice in mobile app development to achieve cost-effectiveness and rapid development. Ionic has evolved as the most popular choice for Hybrid Mobile App development as it tends to match the native experience and provides robust components/tools to build apps. The Ionic Complete Developers course takes you on an end–to-end journey, empowering you to build real-time, scalable, and interactive mobile applications with the Ionic framework.Starting with an introduction to the Ionic framework to get you up and running, you will gradually move on to setting up the environment, and work through the multiple options and features available in Ionic to build amazing hybrid mobile apps. You will learn how to use Cordova plugins to include native functionality in your hybrid apps.You will work through three complete projects and build a basic to-do list app, a London tourist app, and a complete social media app. All three projects have been designed to help you learn Ionic at its very best. From setting up your project to developing on both the server side and front end, and best practices for testing and debugging your projects, you will quickly be able to deliver high-performance mobile apps that look awesome.You will then hone your skills with recipes for cross-platform development. Integrating Ionic with Cordova will bring you native device features, and you will learn about the best modules from its ecosystem. Creating components and customizing the theme will allow you to extend Ionic. You will see how to build your app to deploy to all platforms to make you a confident start-to-finish mobile developer.',price:'$44'}
    
  ];


  async addBook(i: { id:string; name: string; author: string; ed: string; price:string;desp:string;}) {

    this.books.push(i);
    let options = {
      message: "Saved",
      duration: 3000,
      cssClass: "toast.scss"

      
     };
    
    (await this._tc.create(options)).present();
  
    
  }
  
  constructor(public atrCtrl: AlertController,
    private _tc: ToastController,
    private router:Router,
    public navCtrl:NavController) { }

   getBook(){
    return this.books;
  }
 getAllBooks(){
    return this.books;
  }
  
  removePost(selected){
    let index: number = this.books.indexOf(selected);
    if(index > -1){
    this.books.splice(index, 1);
   
    }
  }
  
  async showConfirmAlert(item,number) {
    let alertConfirm = this.atrCtrl.create({
    
      message: 'Are You Sure to Delete this Book?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: async () => {
            console.log('No clicked');
            let options = {
              message:"Delete Cancel",
              duration: 3000,
              cssClass: "toast"
              
             };
            
            (await this._tc.create(options)).present();
          }
        },
       
        {
         
          text: 'Yes',
          handler: async () => {
            console.log('Yes clicked');
            this.removePost(item);
            let options = {
              message:item.name+" Delete Successfully",
              duration: 3000,
              cssClass: "toast.scss"
              
             };
            
            (await this._tc.create(options)).present();
            
            if(number==0){this.router.navigate(['/tabs/tab2'])}
          }
          
        }
      
      ]
    });
    (await alertConfirm).present();
    
  }


 

 

}
