import { Component, OnInit, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'ES-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  imgshow:string = ""; 
  constructor(private titleService:Title, private meta:Meta, private router:Router) { 
    if(this.router.url === "/features")
    {
      this.imgshow = "<img src='assets/images/features/bannerFeature.png' class='img-fluid' alt='Feaures' />";
      this.titleService.setTitle("Edify Skooling | All Stunning Features"); 
      this.meta.addTag({ name: 'description', content: 'List of all the Features of Edify Skooling' });
      this.meta.addTag({ name: 'author', content: 'Mohit Shrivastava' });
      this.meta.addTag({ name: 'keywords', content: 'Edify Skooling, Features, Student Management, Fees Collection Module, Attendance Management, Examination Management, Timetable Management, Library Management, Transport Management, Intelligent Reporting, Hostel Management, SMS Gateway, Email Engines,Payment Gateway, Backup and restore, Multilingual App' });    
    }
    else
    {
      this.imgshow = "";
    }

  }
  objFeatures = [
    {
      ind:1,
      source: "assets/images/features/student-management.png",
      alternate: "Student Management ",
      title:"Student Management ",
      text:"Our Student Management Systems manages the complete student life-cycle from: attracting talent, day-to-day support, exams and assessments, to graduation and alumni communities. Edify Skooling make everyday tasks as quick and efficient as possible.",
      btnText: "Read More",
      tags:['Student Information System', 'Student Management System', 'Admission', 'Enquiry', 'Visitor Book'],
      show: false
    },
    {
      ind:2,
      source: "assets/images/features/fees-collection.png",
      alternate: "Fees Collection Module",
      title:"Fees Collection Module",
      text:"Our Fees Collection module bringing together the academic, administrative and fee billing / invoicing elements with an accounting system that will help you to eliminate unnecessary duplication of work and reduce costly mistakes before its too late.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:3,
      source: "assets/images/features/attendance.png",
      alternate: "Attendance",
      title:"Attendance Management",
      text:"Attendance processing is effective only when it's real-time. Edify Skooling attendance management system handles all aspects with simplicity and efficiency. You experience bliss when attendance, leave (vacation/sick) and payroll are seamlessly integrated.",
      btnText: "Read More",
      tags:['attendance','online attendance', 'attendance system', 'attendance management'],
      show: false
    },
    {
      ind:4,
      source: "assets/images/features/examination.png",
      alternate: "Examination",
      title:"Examination Management",
      text:"Examination management enables from creating exam to exam schedule to marks entry to progress report with grades. Edify Skooling is a complete integrated solution for all the dimensions of examination process till result declaration process.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:5,
      source: "assets/images/features/class-timetable.png",
      alternate: "Class Timetable",
      title:"Timetable Management",
      text:"With the help of the time management system, schools can easily manage the timetable and improve the productivity. Edify Skooling creates subject wise class-section timetable for whole week with subject period start/end time and class room number.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:6,
      source: "assets/images/features/library.png",
      alternate: "Library Management",
      title:"Library Management",
      text:"Developed with industry experts and designed to provide a single, fully-integrated library management system to meet your library needs. Optimize your library workflow and services with features that enable staff to be more accurate and effective.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:7,
      source: "assets/images/features/transport.png", 
      alternate: "Transport Management",
      title:"Transport Management",
      text:"Edify Skooling is making school transportation avoiding common problems and increasing their overall efficiency. Add scheduling, routing, tracking, and reporting to the mix, Edify Skooling makes school buses to transport them to class and on field trips every day.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:8,
      source: "assets/images/features/hostel.png",
      alternate: "Hostel Management",
      title:"Hostel Management",
      text:"Regardless of whatever the size your hostel might be of, our hostel management will help you pull off even your most complex tasks without a hitch. Edify Skooling will let you take care of all your hostel operations at all your locations just from a single place.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:9,
      source: "assets/images/features/reporting.png",
      alternate: "Intelligent Reporting",
      title:"Intelligent Reporting",
      text:"Feature rich business intelligent reports like Exam Marks Report, Attendance Report, Transaction Report, Balance Fees Report, Fees Statement Report, Student Report etc. for the Schools to get clear understanding of staff, parents and students with confidentiality.",
      btnText: "Read More",
      tags:['Exam Marks Report', 'Attendance Report', 'Transaction Report', 'Balance Fees Report', 'Fees Statement Report', 'Student Report'],
      show: false
    },
    {
      ind:10,
      source: "assets/images/features/customization.png",
      alternate: "Customization",
      title:"Cutomization Settings",
      text:"Edify is very flexible and adapt to the way you run your organization. it is easy to use and maintain, and saves cost and lot of time and money over the long run. Customize your school theme/color, to, school logo/name/address, to, sessions or start month.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:11,
      source: "assets/images/features/sms-gateway.png",
      alternate: "SMS Gateway",
      title:"SMS Gateway",
      text:"Edify Skooling is one of the most popular, simple and flexible SMS Gateway which can be easily integrated with any http based sms gateway. We supports multiple sms gateways including Clickatell, Twilio, MSG91, Text Local and custom sms gateway too.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:12,
      source: "assets/images/features/email-engine.png",
      alternate: "Email Engines",
      title:"Email Engines",
      text:"Edify Skooling is to manage mailing lists and set up email engines in few steps. you can create newsletters and manage lists directly on your desktop: on the other you get a cloud email tracking service to handle reporting and improve your email engines.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:13,
      source: "assets/images/features/payment-gateway.png",
      alternate: "Payment Gateway",
      title:"Payment Gateway",
      text:"Let the parents do online transactions for fast and convenient way to settle payment. Edify Skooling includes Paypal, Stripe, PayU and CCAvenue for receiving money and save your time and work, eliminate manually input info received on your end.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:14,
      source: "assets/images/features/backup-restore.png",
      alternate: "Backup & Restore",
      title:"Backup & Restore",
      text:"Edify Skooling have proven and reliable strategies for backup and restore. Technologies such as caching and deduplication are used to continually streamline. Edify Skooling use robust and proven standards adapted to your institute needs.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:15,
      source: "assets/images/features/multiple-language.jpeg",
      alternate: "Multiple Languages",
      title:"Multilingual",
      text:"Edify Skooling application can potentially alleviate different cultural and linguistic backgrounds problems and significantly contribute to an effective, improved care process when foreign languages are involved. Edify supports 73 languages globally.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:16,
      source: "assets/images/features/parents-monitoring.png",
      alternate: "Parent Monitoring",
      title:"Parent Monitoring",
      text:"Edify Skooling is making it easier for parent to see their all children activity in single parent panel login to make it even easier for you to see your child's timetable, homework, behaviour records, attendance, etc. from any part of the world.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:17,
      source: "assets/images/features/responsive.png",
      alternate: "Responsive User Interface",
      title:"Responsive User Interface",
      text:"Edify Skooling provides an optimal viewing experience for users—it can adapt based on what type of device your users are browsing with. It is easy to read, scroll and navigate. It looks great on computers, Smartphones, and tablets. ",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:18,
      source: "assets/images/features/roles-permission.png",
      alternate: "Roles & Permission",
      title:"Roles and Permission",
      text:"Flexible Roles and permission for Admin, Accountant, Teacher, Librarian, Parent & Student. This feature helps setting up different access to content for different groups of users. We ensures that only authorized users are given access to protected data or resources.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:19,
      source: "assets/images/features/leads-engine.png",
      alternate: "Leads Engine",
      title:"Leads Engine",
      text:"The Leads Engine helps its institute grow their students by improving their leads related processes and by enabling them to focus on their core Schooling. You can capture leads from Student enquiry, calls, visitor, postal and other content management systems with ease.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:20,
      source: "assets/images/features/human-resources.png",
      alternate: "HR Management",
      title:"HR Management",
      text:"We deliver hire to retire functions with right utilization of man-hours and let technology do the business processing for you. With Edify Skooling, take a step towards complete yet simplified way to run staff payroll, ensuring enhanced staff productivity.",
      btnText: "Read More",
      tags:[''],
      show: false
    },
    {
      ind:21,
      source: "assets/images/features/front-cms.png",
      alternate: "Front CMS",
      title:"Front CMS",
      text:"Edify Skooling Front CMS allows non-technical admins to easily create and manage their own web content. It reduces its reliance on front-end engineers to make changes to the website, making it quicker and easier to publish new content.",
      btnText: "Read More",
      tags:[''],
      show: false
    }];
    
  @Input() NumberofFeatures: number;
  ngOnInit() {
    if(this.NumberofFeatures>=0)
    {
      this.objFeatures = this.objFeatures.reverse().slice(0,this.NumberofFeatures); 
    }
  }
}
