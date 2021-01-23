import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http: HttpClient) { }
  url: string = "Application_URL";

    postCreditcardDetails(creditcardDetails: any){
    return this.http.post(this.url , creditcardDetails)
    }

}
