import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SingupComponent } from './components/singup/singup.component';
import { AddresseeComponent } from './components/addressee/addressee.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { FraudComponent } from './components/fraud/fraud.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule}from '@angular/common/http'
import { AuthGuard } from './auth.guard';
import { FormAddresseeComponent } from './components/addressee/form-addressee/form-addressee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormTransferComponent } from './components/transfer/form-transfer/form-transfer.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SingupComponent,
    AddresseeComponent,
    TransferComponent,
    FraudComponent,
    NavbarComponent,
    FormAddresseeComponent,
    FormTransferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
