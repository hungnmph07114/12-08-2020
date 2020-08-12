import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FilHotel } from '../Object/filHoltel';
import { Hotel } from '../Object/hotel';
import { Gethotel } from '../model/gethotel';
@Injectable()

export class HotelSerivce {
  hotel: Hotel;
  // products = data;
  api = "http://localhost:6996/api/hotel";
  apiroom = "http://localhost:6996/api/hotel";
  constructor(private http: HttpClient) {}
  searchByPage(FilHotel): Observable<Object> {
    var url = this.api + "/searchByPage";
      return this.http.post<Object>(`${url}`, FilHotel);
  }
  addhotel(hotel):Observable<Hotel[]>{
  return this.http.post<Hotel[]>(`${this.api}`,hotel)
  };
  gethotel(id): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.api}/${id}`);
  }
   updateHotel(hotel): Observable<Hotel> {
     return this.http.put<Hotel>(`${this.api}/${hotel.id}`, hotel);
  }

  // addProduct(product): Observable<Product> {
  //   return this.http.post<Product>(`${this.api}`, product);
  //   // let newObj = { id: 6, ...product };
  //   // this.products.push(newObj);
  // }
  // updateProduct(product): Observable<Product> {
  //   return this.http.put<Product>(`${this.api}/${product.id}`, product);
  // }

  // removeProduct(id): Observable<Product> {
  //   return this.http.delete<Product>(`${this.api}/${id}`);
  //   // return this.products.filter(product => product.id !== id);
  // }


}
