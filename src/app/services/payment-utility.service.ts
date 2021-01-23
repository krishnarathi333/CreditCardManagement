import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreditCardDetailsDTO } from '../data_model/creditCardDetailsDTO';

@Injectable({
  providedIn: 'root'
})
export class PaymentUtilityService {

  constructor() { }
  public creditCardDetails : CreditCardDetailsDTO;

  cardDetailsMapper(cardDetails : FormGroup){

    this.creditCardDetails = new CreditCardDetailsDTO();
    this.creditCardDetails.cardNumber = cardDetails.value.cardNumber;
    this.creditCardDetails.cardName = cardDetails.value.cardName;
    this.creditCardDetails.expDate = cardDetails.value.expDate;
    this.creditCardDetails.securityCode = cardDetails.value.securityCode;
    this.creditCardDetails.amount = cardDetails.value.amount;

    return this.creditCardDetails;
  }

}
