import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl="https://localhost:44389/api/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }

   getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/getbybrandid?brandid="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+ "cars/getbycolorid?colorid="+colorId
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
      }
  
}
