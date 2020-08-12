import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { HotelSerivce } from '../../Service/hotel.service';
import { FilHotel } from '../../Object/filHoltel';
import { Hotel } from '../../Object/Hotel';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
filHotel = new FilHotel(); 
hotelList:Hotel[];
  constructor(
    private hotelService: HotelSerivce, private router: Router,
    private route: ActivatedRoute,
  ) {
    console.log(this.router.getCurrentNavigation().extras.state); 
    this.checkResult(  this.router.getCurrentNavigation().extras.state);
  }



  checkResult(hotel) {
    this.hotelService
      .searchByPage(hotel)
      .subscribe(
        data => {
          this.hotelList=(data as any).content;
          console.log(this.hotelList);
        },
        error => console.log(error)
      );
  }

  ngOnInit(): void {
  }

}
