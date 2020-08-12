import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilHotel } from 'src/app/Object/filHoltel';
import { Hotel } from 'src/app/Object/Hotel';
import { HotelSerivce } from 'src/app/Service/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotelmanager',
  templateUrl: './hotelmanager.component.html',
  styleUrls: ['./hotelmanager.component.css']
})
export class HotelmanagerComponent implements OnInit {
  filhotel= new FilHotel();
  hotelList:Hotel[];
  constructor(
    private hotelService: HotelSerivce, private router: Router,
    private route: ActivatedRoute,public dialog: MatDialog
  ){
    this.filhotel.keyword="";
    this.filhotel.pageIndex=0;
    this.filhotel.pageSize=10
    this.checkResult(this.filhotel)
   }
  ngOnInit(): void {
  };
  addroom(id) {
    this.router.navigate(["admin/hotel/addrom", id]);
  }

  EditHotel(id){
    this.router.navigate(["admin/hotel/edit", id]);
  }
  checkResult(hotel) {
    this.hotelService
      .searchByPage(hotel)
      .subscribe(
        data => {

          this.hotelList=(data as any).content;

          console.log( this.hotelList);
        },
        error => console.log(error)
      );
  }
}
