import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofuserComponent } from './listofuser/listofuser.component';
import { UserAddComponent } from './user-add/user-add.component';



@NgModule({
  declarations: [
    ListofuserComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
