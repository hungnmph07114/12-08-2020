import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Image } from 'src/app/model/image';

@Injectable({
  providedIn: 'root'
})
export class ServiceadminService {
  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private readonly clientId = '4f1975c8b0f0f9d';

  constructor(
    private http: HttpClient
  ) { }
  upload(b64Image: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${this.clientId}`
      }),
    };
    const formData = new FormData();
    formData.append('image', b64Image);
    return this.http.post<Image>(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions);
  }
}
