import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailViewComponent } from '../../components/card-detail-view/card-detail-view.component';
import { CheckCardDetailsComponent } from '../../components/check-card-details/check-card-details.component';


  const appRoutes: Routes = [

    { path : '',  redirectTo: 'cardDetails', pathMatch: 'full'},
     { path : 'cardDetails', component : CheckCardDetailsComponent},
     { path: 'cardEntry', component: CardDetailViewComponent },
     { path : '**',  redirectTo: 'cardDetails'}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }