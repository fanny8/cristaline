import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/Header/Header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { PanierComponent } from './components/panier/panier.component';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AproposComponent,
    PanierComponent,
    ProductComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    
    
   
  ],

  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
