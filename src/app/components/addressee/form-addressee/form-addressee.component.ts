import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddresseerService } from 'src/app/services/addressee/addresseer.service';
import { BankService } from 'src/app/services/bank/bank.service';
import { FormTransferComponent } from '../../transfer/form-transfer/form-transfer.component';
@Component({
  selector: 'app-form-addressee',
  templateUrl: './form-addressee.component.html',
  styleUrls: []
})
export class FormAddresseeComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private addreService: AddresseerService, private bankService: BankService) { }




  banks: any = []

  ngOnInit() {
    this.bankService.searchAllBank().subscribe(res  => {
      this.banks = res
    }, err => console.log(err))
  
  
  }



  closeDialog() {
    this.dialogRef.closeAll();
  }


  addressee = {
    rut: 0,
    name: '',
    email: '',
    idSender: localStorage.getItem('token'),
    account: 0,
    bank: '',
  }

  saveAddressee() {
    console.log(this.addressee);
    this.addreService.createAddressee(this.addressee).subscribe(res => {
      console.log(res);
      this.dialogRef.closeAll();
    }, err => console.log(err))
  }
}
