import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../store/selector/customer.selectors';
import {CustomerState} from '../store/reducer/customer.reducer';

@Component({
  selector: 'app-check-card-details',
  templateUrl: './check-card-details.component.html',
  styleUrls: ['./check-card-details.component.css']
})
export class CheckCardDetailsComponent implements OnInit {

  customers$: Observable<Customer[]>;
  constructor(private _router: Router,
              private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
  }

  goToAddCardDetails(){
    this._router.navigate(['/cardEntry']);
  }

}
