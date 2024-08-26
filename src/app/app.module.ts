import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { TabViewModule} from 'primeng/tabview';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { LoginComponent } from './login/login.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { GenresComponent } from './pages/genres/genres.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesListComponent,
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
    ShowDetailComponent,
    SafeUrlPipe,
    LoginComponent,
    LoginRegisterComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
