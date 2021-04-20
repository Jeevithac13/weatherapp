import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
 {path:'weather', component:WeatherComponent},
 {path:'setting', component:SettingComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
