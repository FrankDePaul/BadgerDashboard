import { AddBadgerComponent } from './add-badger/add-badger.component';
import { ShowBadgerComponent } from './show-badger/show-badger.component';
import { ShowOneComponent } from './show-badger/show-one/show-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'add',component:AddBadgerComponent},
  {path:'show',component:ShowBadgerComponent, children:[
    {path: 'one/:id', component: ShowOneComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
