import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShipmentDataService implements OnInit {
  currentTrackingNumber: string = '';
  currentShipmentData: any = {};
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  onFetchData(trackingNumber: string) {
    return this.http.get(
      `https://angular-http-project-a1409-default-rtdb.firebaseio.com/${trackingNumber}.json`
    );
  }
}
