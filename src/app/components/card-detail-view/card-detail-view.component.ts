import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { PaymentServiceService } from '../../services/payment-service.service';
import { PaymentUtilityService } from '../../services/payment-utility.service';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {CustomerState} from '../store/reducer/customer.reducer';
import {Customer} from '../../models/customer';
import {addCustomer} from '../store/action/customer.actions';

@Component({
  selector: 'app-card-detail-view',
  templateUrl: './card-detail-view.component.html',
  styleUrls: ['./card-detail-view.component.css']
})
export class CardDetailViewComponent implements OnInit {

  constructor(  private _cardService : PaymentServiceService,
                private _cardUtility : PaymentUtilityService,
                private _router: Router,
                private _store: Store<CustomerState>) { }
  getCardForm : FormGroup;
  ngOnInit(): void {
    this.loadCardForm();
  }

  loadCardForm(){
    
    this.getCardForm = new FormGroup({
      'cardNumber': new FormControl("",[Validators.required,Validators.maxLength(16),
                                         Validators.pattern("^[0-9]*$")]),
      'cardName': new FormControl("",Validators.required),
      'expDate': new FormControl("",Validators.required),
      'securityCode': new FormControl("",[Validators.required,Validators.minLength(3),
                                         Validators.maxLength(3), Validators.pattern("^[0-9]*$")]),
      'amount': new FormControl("",[Validators.required, Validators.maxLength(5), 
                                    Validators.pattern("^[0-9]*$")])
    })
   }

   SubmitCardDetails() :void {
     if (this.getCardForm.invalid) {
       alert("Invalid Form")
      return;
    }
    alert("success: valid Form")
    this.addCustomer(this.getCardForm);
    this._cardService.postCreditcardDetails(
           this._cardUtility.cardDetailsMapper(this.getCardForm)
    ).subscribe( (resSuccess : any) =>{
      console.log("Posted data successfully "+resSuccess)
    },( reqError : any) =>{
      console.log("Failed to post data "+reqError)
    })
    this._router.navigate(['../cardDetails']);
   }

   addCustomer(cardDetail: FormGroup): void {
    const customer = new Customer();
    customer.name = cardDetail.value.cardName;
    customer.cardNumber = cardDetail.value.cardNumber;
    customer.cvv = cardDetail.value.securityCode;
    customer.expDate = cardDetail.value.expDate;
    customer.amount = cardDetail.value.amount;
    this._store.dispatch(addCustomer(customer));
  }
}
