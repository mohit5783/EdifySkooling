import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ES-bannerslider',
  templateUrl: './bannerslider.component.html',
  styleUrls: ['./bannerslider.component.css']
})
export class BannersliderComponent implements OnInit {

  constructor() { }
  msCarousel = [0,1,2,3,4];
  objCarousel = [
  {
    ind: 1,
    source: "assets/images/01.jpg",
    tinysource: "assets/images/tinyimgs/01.jpg",
    alternate: "First Slide",
    heading: "Visual Studio",
    desc: "Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft. It is used to develop computer programs for Microsoft Windows, as well as web sites, web applications and web services."
  },
  {
    ind: 2,
    source: "assets/images/02.jpg",
    tinysource: "assets/images/tinyimgs/02.jpg",
    alternate: "Second Slide",
    heading: "HTML5, CSS3",
    desc: "HTML5 is not one large entity, but rather made up of smaller parts that work together to create something innovative and advanced. CSS3 is a large single specification defining various features, CSS 3 is divided into modules. Each module adds new capabilities.",
    
  },
  {
    ind: 3,
    source: "assets/images/03.jpg",
    tinysource: "assets/images/tinyimgs/03.jpg",
    alternate: "Third Slide",
    heading: "LAMP (MySQL*, PHP*)",
    desc: "LAMP is suitable for building dynamic web sites and web applications. Archetypal LAMP, variations and retronyms appeared for other combinations of operating system, web server, database, and software language.",
    
  },
  {
    ind: 4,
    source: "assets/images/04.jpg",
    tinysource: "assets/images/tinyimgs/04.jpg",
    alternate: "Fourth Slide",
    heading: "LAMP (MySQL*, PHP*)",
    desc: "LAMP is suitable for building dynamic web sites and web applications. Archetypal LAMP, variations and retronyms appeared for other combinations of operating system, web server, database, and software language.",
    
  },   
  {
    ind: 5,
    source: "assets/images/05.jpg",
    tinysource: "assets/images/tinyimgs/05.jpg",
    alternate: "Fifth Slide",
    heading: "LAMP (MySQL*, PHP*)",
    desc: "LAMP is suitable for building dynamic web sites and web applications. Archetypal LAMP, variations and retronyms appeared for other combinations of operating system, web server, database, and software language.",
    
  }     
];
  ngOnInit() {
  }

}
