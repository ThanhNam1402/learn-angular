import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Bai2Component } from './pages/bai2/bai2.component';
import { Bai3Component } from './pages/bai3/bai3.component';
import { Bai4Component } from './pages/bai4/bai4.component';

const routes: Routes = [
  { path: 'bai2', component: Bai2Component },
  { path: 'bai3', component: Bai3Component },
  { path: 'bai4', component: Bai4Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
