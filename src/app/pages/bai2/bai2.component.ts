import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.scss']
})
export class Bai2Component implements OnInit {
  student = {
    name : 'Thanh Nam',
    gender : 'Male',
    birthday : '1-1-2000',
    img : 'https://i.pinimg.com/564x/4c/c9/4c/4cc94c3dc6ec4f743bad42a1c15116ac.jpg'
  }

  constructor() { }

  ngOnInit(): void {
    console.log('mount');
  }

}


