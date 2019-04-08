import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { MechanismComponent } from './mechanism/mechanism.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'features', component: FeaturesComponent },
  { path:'mechanism', component: MechanismComponent },
  { path:'testimonials', component: TestimonialsComponent },
  { path:'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
