import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CardDetailViewComponent } from './components/card-detail-view/card-detail-view.component';
import { CheckCardDetailsComponent } from './components/check-card-details/check-card-details.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {customerFeatureKey, reducer} from './components/store/reducer/customer.reducer'; 

const routes: Routes = [
  { path: 'cardView', component: CardDetailViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardDetailViewComponent,
    CheckCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(customerFeatureKey, reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
