import { Component, OnInit } from '@angular/core';

import { IIventor } from 'src/app/interfaces/inventor.interface';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.scss']
})
export class Bai3Component implements OnInit {


  listInventor : IIventor[] = [
    {id : 1, firstName : 'Albart', lastName : 'Einstein', year : 1834, passed : 1912},
    {id : 2, firstName : 'Issac', lastName : 'Newton', year : 1612, passed : 1723},
    {id : 3, firstName : 'Maria', lastName : 'Curie', year : 1567, passed : 1612},
    {id : 4, firstName : 'Nicolaus', lastName : 'Nicolaus', year : 1854, passed : 1945},
    {id : 5, firstName : 'galileo ', lastName : 'telescope', year : 1472, passed : 1582},
    {id : 6, firstName : 'johannes ', lastName : 'kepler ', year : 1571, passed : 1681}
  ]


  constructor() { }

  ngOnInit(): void {
    console.log(this.listInventor);
  }

}
