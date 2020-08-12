import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientmainComponent } from './client/clientmain/clientmain.component';
import { HomeComponent } from './client/Home/home/home.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { TrangchuComponent } from './admin/trangchu/trangchu.component';
import { AddhotelComponent } from './admin/addhotel/addhotel.component';
import { DangkyComponent } from './admin/dangkydangnhap/register/dangky.component';
import { LoginComponent } from './admin/dangkydangnhap/login/login.component';
import { HotelmanagerComponent } from './admin/hotel/hotelmanager/hotelmanager.component';
import { OurRoomsComponent } from './client/our_rooms/our-rooms/our-rooms.component';
import { DeltailRoomComponent } from './client/our_rooms/deltail-room/deltail-room.component';
import { HotelDetailsComponent } from './client/our-hotel/hotel-details/hotel-details.component';
import { OurHotelComponent } from './client/our-hotel/our-hotels/our-hotel.component';
import { AddroomComponent } from './admin/hotel/addroom/addroom.component';
import { EdithotelComponent } from './admin/hotel/edithotel/edithotel.component';


const routes: Routes = [
  {
    path: '', component: ClientmainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent } ,
      {path: 'rooms-our', component: OurRoomsComponent },
      {path: 'rooms-detail', component: DeltailRoomComponent},
      {path: 'hotel-details', component: HotelDetailsComponent},
      {path: 'our-hotel', component: OurHotelComponent}
    ]
  },
   {path:'admin' ,component: AdminhomeComponent ,children:[
    { path: '', redirectTo: 'trangchu', pathMatch: 'full' },
     { path: 'trangchu', component: TrangchuComponent } ,
     { path: 'addhotel', component: AddhotelComponent },
     { path: 'hotelmanager', component: HotelmanagerComponent},
     { path: "hotel/addrom/:hotelID", component: AddroomComponent },
     { path: "hotel/edit/:hotelID", component: EdithotelComponent },

  ]},
  { path: 'register', component: DangkyComponent} ,
  {path:'login',component:LoginComponent},


  //   path: 'admin', component: AdminComponent,
  //   children: [
  //     { path: '', redirectTo: 'manager', pathMatch: 'full' },
  //     { path: 'top3', component: HeaderComponent },
  //     { path: 'manager', component: ManagerProductComponent },
  //     { path: 'add', component: AddProductComponent },
  //     {path:'detail/:id',component:DetailtProductComponent},
  //     {path:'edit-product/:id',component:EditProductComponent},
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
