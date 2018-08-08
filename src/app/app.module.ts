import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular//common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewslistingComponent } from './newslisting/newslisting.component';
import { ArticleComponent } from './clientviews/article/article.component';
import { AdDirective } from './clientviews/ad.directive';
import { ConfigService } from './config/config.service';
import { GalleryComponent } from './clientviews/gallery/gallery.component';
import { PrintproductComponent } from './clientviews/printproduct/printproduct.component';
import { HeroComponent } from './clientviews/hero/hero.component';
import { ListingComponent } from './listing/listing.component';
import { MydirectiveDirective } from './directive/mydirective.directive';
import { MypipePipe } from './pipe/mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewslistingComponent,
    ArticleComponent,
    AdDirective,
    GalleryComponent,
    PrintproductComponent,
    HeroComponent,
    ListingComponent,
    MydirectiveDirective,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
