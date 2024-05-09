import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.scss']
})
export class Bai4Component implements OnInit {



  listProducts : IProduct[] = [
    {id : 1, name : 'product1', price : 1200, sale_price : 1000, code : 'PD-1', star : 3.2, img : 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg'},
    {id : 2, name : 'product2', price : 2200, sale_price : 2000, code : 'PD-2', star : 4.2, img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2tdHgw3_RjYv4GmpMjaJxun50ImgdTVzGhYtzdYFuje8spK_MeNpBUVyqn6_haIM5yY&usqp=CAU'},
    {id : 3, name : 'product3', price : 3200, sale_price : 3000, code : 'PD-3', star : 4.1, img : 'https://www.elgiganten.se/image/dv_web_D180001002838491/361923/iphone-13-pro-5g-smartphone-512gb-gold--pdp_zoom-3000--pdp_main-540.jpg'},
    {id : 4, name : 'product4', price : 4200, sale_price : 4000, code : 'PD-4', star : 5.0, img : 'https://bilder.universal.at/i/empiriecom/747ba739f0c5e50bbd26384f7596403c.jpg?$format_dv_mob_075$'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
