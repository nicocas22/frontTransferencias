import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer/transfer.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private transferService: TransferService) {}
  transfers: any = []
  ngOnInit(): void {
      this.transferService.getTransferForSender(localStorage.getItem('token')).subscribe(res => {
        this.transfers = res
        console.log(res);
        
      }, err => console.log(err)
      )
  }

}
