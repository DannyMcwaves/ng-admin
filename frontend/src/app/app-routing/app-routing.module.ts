import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent} from "../home/home.component";
import { CreatorComponent} from "../creator/creator.component";
import { FourOhFourComponent} from "../four-oh-four/four-oh-four.component";

const routes:Routes = [
  { path: 'list', component: CreatorComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: FourOhFourComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})


export class AppRoutingModule { }
