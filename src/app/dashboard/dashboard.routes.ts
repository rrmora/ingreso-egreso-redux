import { Routes } from "@angular/router";
import { IncomeDischargeComponent } from "../income-discharge/income-discharge.component";
import { StadisticComponent } from '../income-discharge/stadistic/stadistic.component';
import { DetailComponent } from '../income-discharge/detail/detail.component';


export const dashboardroutes: Routes = [
    {path: '', component: StadisticComponent},
    {path: 'income-discharge', component: IncomeDischargeComponent},
    {path: 'detail', component: DetailComponent}
]