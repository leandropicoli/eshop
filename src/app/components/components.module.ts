import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserCardComponent } from './user-card/user-card.component';



@NgModule({
  declarations: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent
  ]
})
export class ComponentsModule { }
