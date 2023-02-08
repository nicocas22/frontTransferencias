import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { AddresseeComponent } from './components/addressee/addressee.component';
import { SigninComponent } from './components/signin/signin.component';
import { SingupComponent } from './components/singup/singup.component';
import { FraudComponent } from './components/fraud/fraud.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  //Auth a Addresse
  {
    path: "addressee",
    component: AddresseeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },
  {
    path: 'fraud',
    component: FraudComponent
  },
   //Auth a trasnfers
  {
    path: 'transfer',
    component: TransferComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
