import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'ES-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  imgshow:string = ""; 
  constructor(private titleService:Title, private meta:Meta, private router:Router) { 
    if(this.router.url === "/testimonials")
    {
      this.imgshow = "<img src='assets/images/testimonial/bannerTestimonial.png' class='img-fluid' alt='Testimonials' />";
      this.titleService.setTitle("Edify Skooling | The testimonials"); 
      this.meta.addTag({ name: 'description', content: 'Testimonials: This is what our customers says about us.' });
      this.meta.addTag({ name: 'author', content: 'Mohit Shrivastava' });
      this.meta.addTag({ name: 'keywords', content: 'Testimonials, Edify Skooling, Front Office, ' });
    }
    else
    {
      this.imgshow ="";
    }
  }
  TestimonialCarouselCount = [0,1,2,3,4];
  objCarouselTestimonial = [
  {
    ind: 1,
    source: "assets/images/testimony1.jpg",
    tinysource: "assets/images/tinyimgs/testimony1.jpg",
    alternate: "Edify Skooling Testimonial",
    heading: "Just one word WOW!!",
    desc: "We love Edify Skooling. It's so easy to use and comes with so many features.It fits so well with our requirements.",
    PersonName:"Liam Benjamin"
  },
  {
    ind: 2,
    source: "assets/images/testimony2.jpg",
    tinysource: "assets/images/tinyimgs/testimony2.jpg",
    alternate: "Testimonial for Edify Skooling",
    heading: "Such an amicable relationship",
    desc: "The Edify Skooling team is truly top notch at every level of engagement. Having a partner like Edify Skooling has helped our institute in so many ways and they are always there to assist with any issue. Support from this team has surpassed our expectations! Hats off to Edify Skooling for its brilliance.",
    PersonName:"Alfie Murphy"
  },
  {
    ind: 3,
    source: "assets/images/testimony3.jpg",
    tinysource: "assets/images/tinyimgs/testimony3.jpg",
    alternate: "Significant Satisfaction with Edify Skooling",
    heading: "All-the-best in their future endeavours.",
    desc: "Our association with Edify Skooling has been a significant. The Software has made life very easier for the school in terms of the communication with our parents. Our parents now seem to be happy and enjoying the services. Edify Skooling has truly lived up to the promises they made.",
    PersonName:"Freddie Winston"
  },
  {
    ind: 4,
    source: "assets/images/testimony4.jpg",
    tinysource: "assets/images/tinyimgs/testimony4.jpg",
    alternate: "Amazing app, Edify Skooling",
    heading: "One big happy family",
    desc: "There are so many features in Edify Skooling, yet it is so user friendly and easy to use. Alerts, reminders, photos, attendance, application, online fee submission, you name the feature, the app has it. The regular use of the Edify Skooling has ensured that there is no confusion between the school and parent/teacher as every information reaches them on time and also keeps the parent updated about their child’s progress regularly.",
    PersonName:"George Kramer"
  },   
  {
    ind: 5,
    source: "assets/images/testimony5.jpg",
    tinysource: "assets/images/tinyimgs/testimony5.jpg",
    alternate: "Testimony for Edify Skooling",
    heading: "Nine out of Ten",
    desc: "Choosing the right application for your school is very important but more importantly is after sale service. Because poor support would not let you fully implement the functionalities and I think Edify Skooling support team is very active. On the scale of 1 to 10 I would give them 9.",
    PersonName:"Olivia Beckett"
  }
];
  ngOnInit() {
    
  }
}
