import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// form date
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// autoSearch


import { AutocompleteLibModule } from 'angular-ng-autocomplete';


import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './client/footer/footer/footer.component';
import { NavComponent } from './client/nav/nav/nav.component';
import { HomeComponent } from './client/Home/home/home.component';
import { CarouselComponent } from './client/carousel/carousel.component';
import { OurRoomsComponent } from './client/our_rooms/our-rooms/our-rooms.component';
import { DeltailRoomComponent } from './client/our_rooms/deltail-room/deltail-room.component';
import { BlogDetailsComponent } from './client/blog-details/blog-details.component';
import { BlogComponent } from './client/blog/blog.component';
import { HotelSerivce } from './Service/hotel.service';
import { ClientmainComponent } from './client/clientmain/clientmain.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { NavbaradminComponent } from './admin/navbaradmin/navbaradmin.component';
import { SidebaradminComponent } from './admin/sidebaradmin/sidebaradmin.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { TrangchuComponent } from './admin/trangchu/trangchu.component';
import { AddhotelComponent } from './admin/addhotel/addhotel.component';
import{ServiceadminService} from  "src/app/service/serviceadmin.service";
import { DangkyComponent } from './admin/dangkydangnhap/register/dangky.component';
import { LoginComponent } from './admin/dangkydangnhap/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HotelDetailsComponent} from  './client/our-hotel/hotel-details/hotel-details.component'
import { OurHotelComponent } from './client/our-hotel/our-hotels/our-hotel.component';
import { from } from 'rxjs';
import { HotelmanagerComponent } from './admin/hotel/hotelmanager/hotelmanager.component';
import { AddroomComponent } from './admin/hotel/addroom/addroom.component';
import { EdithotelComponent } from './admin/hotel/edithotel/edithotel.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    HotelmanagerComponent,
    CarouselComponent,
    OurRoomsComponent,
    DeltailRoomComponent,
    BlogDetailsComponent,
    BlogComponent,
    ClientmainComponent,
    AdminhomeComponent,
    NavbaradminComponent,
    SidebaradminComponent,
    HomeadminComponent,
    TrangchuComponent,
    AddhotelComponent,
    DangkyComponent,
    LoginComponent,
    HotelDetailsComponent,
    OurHotelComponent,
    AddroomComponent,
    EdithotelComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,

   // BsDatepickerModule.forRoot(),
    FormsModule,
  AutocompleteLibModule,
  HttpClientModule,
  BrowserAnimationsModule
  ],
  providers: [HotelSerivce,
    ServiceadminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
