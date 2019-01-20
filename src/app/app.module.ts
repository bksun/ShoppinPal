import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatExpansionModule, MatTabsModule,  MatInputModule, MatCardModule, MatButtonModule,
  MatToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SubCatsComponent } from './sub-cats/sub-cats.component';

@NgModule({
  declarations: [
    MatExpansionModule,
    AppComponent,    DashboardComponent,    LoginComponent,
    SignupComponent,    HomeComponent,
    NavigationComponent,
    SubCatsComponent
  ],
  imports: [
    BrowserModule,    AppRoutingModule,
    HttpClientModule,    BrowserAnimationsModule,    FormsModule,   BrowserAnimationsModule,
    MatInputModule,    MatCardModule,    MatButtonModule,    MatToolbarModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
