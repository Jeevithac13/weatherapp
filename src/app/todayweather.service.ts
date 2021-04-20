

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map , switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodayweatherService {
url ='https://api.openweathermap.org/data/2.5/weather/?q=';
apikey ='e232747f03abf9fc3f11b2544bb3dd91';
myurl=`https://api.openweathermap.org/data/2.5/forecast/?q=`;
apikey2 = '93f0e591a0b43a0409fb5f376ddacf10';

public val=true;
  todayweather: any;
  weather: any;
  constructor(private http : HttpClient) { }
  public cityName ="";
  public myunit = "metric"
  public myUrl:any;
  cities:any;

//   public cities=[];
//   public count=0;
//   public val:any;
//   public defaultCity:any;
//   public unit:any;
// public value:any;
//   public setCityList(city:any){
//     this.count=parseInt(localStorage.setItem(this.value,"count"));
//     localStorage.setItem(`${this.count}`,city);
//     this.count+=1;
//     localStorage.setItem("count",JSON.stringify(this.count));
//     this.getCityList();
//   }

//   public getCityList(){
//     this.count=parseInt(localStorage.getItem("count"));
//     for (let i = 0; i < this.count; i++) {
//       this.cities[i]=localStorage.getItem(`${i}`);
//     }
//     console.log(this.cities);
//     return this.cities;
//   }

//   public setDefaultCity(city:any){
//     this.defaultCity=city;
//   }

//   public getDefaultCity(){
//     return this.defaultCity;
//   }
 
//   public setUnit(unt:any){
//     localStorage.setItem("unit",unt);
//   }

//   public deleteCity(cityCode:any){
//     localStorage.removeItem(cityCode);
//     this.count=parseInt(localStorage.getItem("count"));
//     this.val=localStorage.getItem(JSON.stringify(this.count-1));
//     localStorage.setItem(cityCode,this.val);
//     this.count-=1;
//     localStorage.setItem("count",JSON.stringify(this.count));
//     this.cities.length-=1;
//     this.getCityList();
//   }



  public setCity( value:string)
  {
    this.cityName = value;
   this.url =`https://api.openweathermap.org/data/2.5/weather/?q=${this.cityName}&appid=e232747f03abf9fc3f11b2544bb3dd91`;
   this.myurl = `https://api.openweathermap.org/data/2.5/forecast/?q=${this.cityName}&appid=93f0e591a0b43a0409fb5f376ddacf10`;
    console.log(this.cityName);
    console.log(this.myUrl);
  }

  getWeatherDataByCoords(lat:any,lon:any) :Observable<any>
  {
    let params = new HttpParams()
    .set('lon', lon)
    .set('lat', lat)
    .set('units', 'imperial')
    .set('appid',this.apikey)

    return this.http.get<any>(this.url, {params});
  }
  getForecastDataByCoords(lat:any,lon:any) :Observable<any>
  {
    let params = new HttpParams()
    .set('lon', lon)
    .set('lat', lat)
    .set('units', 'imperial')
    .set('appid',this.apikey2)

    return this.http.get<any>(this.myurl, {params});
  }
    

getWeatherDataByName() :Observable<any>
  {​​​​​​​​
let params = new HttpParams()
     .set('units' , this.myunit)

return this.http.get(this.url ,{​​​​​​​​params}​​​​​​​​);
// return this.http.get(this.myUrl);
  }​​​​​​​​

  getForecast()
  {
    let params = new HttpParams()
    .set('units' , this.myunit)
    return this.http.get<any>(this.myurl ,{params});
  }

  setValue()
  {
    this.val =true;
  }
  getWeather()
  {
  this.todayweather.getWeatherDataByName().subscribe((data: any)=>{
    this.weather = data;
    console.log(data);
  })
  this.todayweather.getForecast().subscribe((data:any)=>{
    this.weather = data;
    console.log(data);
  });
}
// addCities(cities:any){
//   let mycity=[];
//   if(localStorage.getItem('value')){
//     mycity = JSON.parse(localStorage.getItem('value'))
// mycity = [cities,...mycity]
//   }else [
//      mycity = [cities]
//   ]
//  localStorage.setItem('value',JSON.stringify(this.cities));
// }
// Save city in localStorage
saveCity(ct:String){
  let cities:any[]
  if(localStorage.getItem('cities')){
 
  cities = JSON.parse(String(localStorage.getItem('cities')));
  for(let city of cities){
    console.log(typeof city)
    if(city == ct){
      return
    }
  }
  cities = [ct,...cities]
  }
  else
  {
    cities = [ct];
  }
  localStorage.setItem('cities', JSON.stringify(cities));
  }

  // Delete city from localstorage
  deleteCity(cityName:any){
    let cities = []
    let newcities=[]
    cities = JSON.parse(String(localStorage.getItem('cities')))
    console.log(cities)
    for(let city of cities){
      if(city!=cityName){
        newcities.push(city)
      }
    }
    localStorage.setItem('cities',JSON.stringify(newcities));

  }

}

   

  
