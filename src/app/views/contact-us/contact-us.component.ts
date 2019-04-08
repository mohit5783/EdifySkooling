import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'ES-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  imgshow: string = "";
  constructor(private titleService:Title, private meta:Meta, private router: Router) {
    if (this.router.url === "/contact") {
      this.imgshow = "<img src='assets/images/contact/BannerContact.png' class='img-fluid' alt='Contact Edify Skooling' />";
      this.titleService.setTitle("Edify Skooling | Contact Us"); 
      this.meta.addTag({ name: 'description', content: 'Contact Edify Skooling' });
      this.meta.addTag({ name: 'author', content: 'Mohit Shrivastava' });
      this.meta.addTag({ name: 'keywords', content: 'Contact, Email, Social Media, Facebook, Linkedin, Phone Number, Whatsapp' });
    }
    else {
      this.imgshow = "";
    }
  }

  ngOnInit() {
  }

}
