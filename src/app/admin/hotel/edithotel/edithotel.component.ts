import { Component, OnInit } from '@angular/core';
import{Image} from "src/app/model/image";
import{ServiceadminService} from  "src/app/service/serviceadmin.service";
import { from } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";
import{HotelSerivce} from "src/app/Service/hotel.service";
import { Hotel } from 'src/app/Object/Hotel';
import { ImageHotel } from 'src/app/Object/ImageHotel';

@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {
  hotel: Hotel;
  data: Image;
  check: boolean = false;
  imageHotel:ImageHotel  = new ImageHotel();
  mes;

  constructor( private imgService: ServiceadminService,private hotelservice : HotelSerivce,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.getproduct();
  }
  getproduct(){
    this.route.params.subscribe(param => {
      console.log(param);
      this.hotelservice.gethotel(param.hotelID).subscribe(data => this.hotel= data
      )} );
    }
    submitForm(){
      this.hotelservice.updateHotel(this.hotel).subscribe(data => console.log(data)
      );
      this.router.navigate(['admin/hotelmanager']);
    }
  // getproduct(){
  //   this.route.params.subscribe(param => {
  //     console.log(param);this.hotelservice.getProducts1(param.id).subscribe(data => {this.hotel})} );
  //   }
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
