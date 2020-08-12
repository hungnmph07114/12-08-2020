import { Component, OnInit } from '@angular/core';
import{Image} from "src/app/model/image";
import{ServiceadminService} from  "src/app/service/serviceadmin.service";
import { from } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";
import{HotelSerivce} from "src/app/Service/hotel.service";
import { Hotel } from 'src/app/Object/Hotel';
import { ImageHotel } from 'src/app/Object/ImageHotel';
import { User } from 'src/app/Object/User';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  hotel: Hotel = new Hotel();
  user: User = new User();
  data: Image;
  check: boolean = false;
  imageHotel:ImageHotel  = new ImageHotel();
  mes;
  constructor( private imgService: ServiceadminService,private hotelservice : HotelSerivce,
    private router: Router) { }

  ngOnInit(): void {
    this.imageHotel.imagePath="WWW";
    this.hotel.imageHotel = []
  }
  Addhotel(){
    this.hotel.imageHotel.push(this.imageHotel)
    // this.hotel.user.id = Number(JSON.parse(localStorage.getItem('key')));
    this.user.id=1
    this.hotel.user = this.user;
     this.hotelservice.addhotel(this.hotel).subscribe(data => console.log(data));


  }
  onChange(file) {
    if (file && file) {
      var reader = new FileReader();

      reader.readAsDataURL(file); // read file as data url

      reader.onload = (file) => { // called once readAsDataURL is completed

       // this.hotel.img = file.target.result;
      }
    }
    this.check = true;
    this.imgService.upload(file)
      .subscribe(res => {
        console.log(this.data = res);

       // this.product.img = this.data.data.link;
       this.imageHotel.imagePath = this.data.data.link;
      });
  }
}
