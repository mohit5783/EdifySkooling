import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannersliderComponent } from './bannerslider/bannerslider.component';

@NgModule({
  declarations: [ContentComponent, HeaderComponent, FooterComponent, BannersliderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, BannersliderComponent]
})
export class LayoutModule { }
