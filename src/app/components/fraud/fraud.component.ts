import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-fraud',
  templateUrl: './fraud.component.html',
  styleUrls: ['./fraud.component.css']
})
export class FraudComponent {

  constructor(private servicesUser: UserService) {}

  usersfraud: any = [];
  ngOnInit() {
    this.servicesUser.usersFraud().subscribe(res => {
      this.usersfraud = res      
    }, err => console.log(err)
    )
  } 

}
