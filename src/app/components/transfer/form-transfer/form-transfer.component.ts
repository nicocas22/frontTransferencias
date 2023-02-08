import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransferService } from 'src/app/services/transfer/transfer.service';

@Component({
  selector: 'app-form-transfer',
  templateUrl: './form-transfer.component.html',
  styleUrls: []
})
export class FormTransferComponent implements OnInit {
 @Input() addressee: any = {}

 constructor( private dialogRef: MatDialog, private transferServices: TransferService ){}

  ngOnInit(): void {
    
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }
  
  payload: any = {}
  createTransfer() {
    this.payload.idSender = this.addressee.idSender
    this.payload.rutAddressee = this.addressee.rut
    this.transferServices.createTransfer(this.payload).subscribe(res => {
      this.dialogRef.closeAll();
    }, err => console.log(err))
  }


}
