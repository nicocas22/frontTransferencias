import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddresseerService } from 'src/app/services/addressee/addresseer.service';
import { BankService } from 'src/app/services/bank/bank.service';
import { FormTransferComponent } from '../transfer/form-transfer/form-transfer.component';
import { FormAddresseeComponent } from './form-addressee/form-addressee.component';

@Component({
  selector: 'app-addressee',
  templateUrl: './addressee.component.html',
  styleUrls: []
})
export class AddresseeComponent  implements OnInit{

  constructor(private dialogRef: MatDialog, private serviceAddresse: AddresseerService) {}
  addresses: any=[]


  ngOnInit() {
    this.serviceAddresse.searchForSender(localStorage.getItem('token')).subscribe(res => {
      this.addresses = res
      console.log(res);
      
    }, err => console.log(err)
    )


  } 
  
  openDialogTransfer(data: any) {
    const modal = this.dialogRef.open(FormTransferComponent)
    modal.componentInstance.addressee = data
  }


  openDialog() {
    this.dialogRef.closeAll()
    this.dialogRef.open(FormAddresseeComponent)
  }
  

}
