import { Component, OnInit, Injectable } from '@angular/core';

@Component({  
  selector: 'ES-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {

  constructor() { }
  msMenu = [
    {
      MenuName:' Home', 
      MenuRoute:'', 
      MenuIcon: 'fa fa-home fa-lg'
    },
    {
      MenuName:' Features', 
      MenuRoute:'/features', 
      MenuIcon: 'fa fa-bolt fa-lg'
    },
    {
      MenuName:' Mechanism',
      MenuRoute:'/mechanism', 
      MenuIcon: 'fa fa-linode fa-lg'
    }, 
    {	
      MenuName:' Testimonials',
      MenuRoute:'/testimonials',
      MenuIcon: 'fa fa-quote-left fa-lg'
    },
    {	
      MenuName:' Contact Us',
      MenuRoute:'/contact',
      MenuIcon: 'fa fa-address-card fa-lg'
    }];
    activeMenu = 'Home';
   

  ngOnInit() {
  }

}
