import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { NgTerminalModule } from 'ng-terminal';
import { FingerprintjsProAngularModule } from '@fingerprintjs/fingerprintjs-pro-angular';
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BlogComponent,
    ReadBlogComponent,
    CatFactsComponent,
    CurrencyConvertorComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    FingerprintjsProAngularModule.forRoot({loadOptions: {
      apiKey: "en5IfhLlm6QiwsNnBOeQ",
      region: "ap"
    }}),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgTerminalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
