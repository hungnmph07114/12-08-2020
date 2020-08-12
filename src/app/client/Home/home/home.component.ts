import { Component, OnInit } from '@angular/core'; 



import { Router, ActivatedRoute } from "@angular/router"; 
import { dataTinhThanh } from 'src/app/Object/tinhthanh';
import { quanhuyen } from 'src/app/Object/quanhuyen';
import { FilHotel } from 'src/app/Object/filHoltel';
import { HotelSerivce } from 'src/app/Service/hotel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  key = 'name';
  keywordquanhuyen='name';
  keywordsonguoi='name'; 
  keywordkhoanggia="name" 
  data = dataTinhThanh; 
  listquanhuyen = quanhuyen; 
  filhotel= new FilHotel(); 
  songuoi = [ {name:'1 người',value:1}, {name:'2 người',value:2}, {name:'3 người',value:3}, {name:'4 người',value:4}, {name:'5 người',value:5}]
  khoanggia = [ {name:' dưới 500',value:{priceEnd:500000,priceStart:0}}, {name:'từ 500 đến  1 triệu',value:{priceEnd:1000000,priceStart:500001}}, {name:'từ 1 triệu đến 2 triệu',value:{priceEnd:2000000,priceStart:1000001}}, {name:' từ 2 triệu đến 4 triệu',value:{priceEnd:4000000,priceStart:2000001}}]
  constructor(
  private hotelService:HotelSerivce, private router: Router,
  private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.filhotel.keyword="";
    this.filhotel.pageIndex=0;
    this.filhotel.pageSize=10
  }

  addFilHotel(){
    this.goToResultSearch();
  }

  checkResult() {
    this.hotelService
      .searchByPage(this.filhotel)
      .subscribe(
        response => {
          console.log(response); 
        },
        error => console.log(error)
      );
  }

  selectEventtinhthanh(item) { 
    this.filhotel.province=item.name; 
    this.listquanhuyen = quanhuyen.filter((items)=>{
      return items.tinh_id== item.id;
    }) 
  }
  selectEventquanhuyen(item){
    this.filhotel.district=item.name; 
  }

  goToResultSearch() { 
    this.router.navigate(['/hotel'], { state: this.filhotel });
  }

  selectEventsonguoi(item){
    this.filhotel.numberPeople=item.value; 
  }
  selectEventkhoanggia(item){
    this.filhotel.priceStart=item.value.priceStart;
    this.filhotel.priceEnd=item.value.priceEnd;
  }

 

}
