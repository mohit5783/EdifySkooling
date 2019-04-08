import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { MechanismComponent } from './mechanism/mechanism.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { LayoutModule  } from '../layout/layout.module';

@NgModule({
  declarations: [HomeComponent, FeaturesComponent, MechanismComponent, TestimonialsComponent, ContactUsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
