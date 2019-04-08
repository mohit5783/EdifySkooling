import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { FeaturesComponent } from '../views/features/features.component';
import { MechanismComponent } from '../views/mechanism/mechanism.component';
import { TestimonialsComponent } from '../views/testimonials/testimonials.component';
import { ContactUsComponent } from '../views/contact-us/contact-us.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'features', component: FeaturesComponent },
  { path:'mechanism', component: MechanismComponent },
  { path:'testimonials', component: TestimonialsComponent },
  { path:'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
