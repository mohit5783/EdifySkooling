import { Component, OnInit } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'ES-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title, private meta: Meta) { 
    this.titleService.setTitle("Edify Skooling | Make your school smart"); 
    this.meta.addTag({ name: 'description', content: 'Make your School Smart with Edify Skooling' });
    this.meta.addTag({ name: 'author', content: 'Mohit Shrivastava' });
    this.meta.addTag({ name: 'keywords', content: 'Edify Skooling, Schooling, Smart School, Web Application for School, School Management Software, School System Application, Education, Institute, University, College' });    
  }

  ngOnInit() {
  }

}
