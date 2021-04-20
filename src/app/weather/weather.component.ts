 import { Component, OnInit } from '@angular/core';
import { TodayweatherService } from '../todayweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  lat:any;
  lon:any;
  weather:any;
  forecast:any;
  val:boolean=true;
  val2:boolean =true;
 
  cities:any=[];
  // public cities=[];
  // public isClick=true;
  // public cityCode:any;
  // public city:any;
  // public unit:any;

  constructor( private todayweather: TodayweatherService ) { }
  selectedCity: string = '';

  


  selectChangeHandler (event: any) {
    //update the ui
    this.selectedCity = event.target.value;
   this.todayweather.setCity(this.selectedCity);
   this.getWeather();
   // this.myService.getCity(this.selectedCity);
  }
  ngOnInit(): void {
    if(this.val)
    {
      this.val2 =false;
         this.getLocation();
    }
  }
 getLocation()
 {
   if('geolocation' in navigator)
   {
     navigator.geolocation.watchPosition((success)=>
     {
       this.lat=success.coords.latitude;
       this.lon =success.coords.longitude;
       this.todayweather.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>
        {
          this.weather= data;
          console.log(data);
        })
        this.todayweather.getForecastDataByCoords(this.lat, this.lon).subscribe(data=>
          {
            this.forecast= data.list;
            console.log(this.forecast);
          })
     })
   }
 }
 getWeather()
 {
    this.todayweather.getWeatherDataByName().subscribe(data =>
      {
        this.weather = data;
        console.log(data);
        console.log(this.weather.name);
      }
      )
      this.todayweather.getForecast().subscribe(data =>
        {
          this.weather = data.list;
          console.log(data);
        }
        )
 }


}