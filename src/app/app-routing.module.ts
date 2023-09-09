import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homecomponent } from './home/home.component';
import { GallryComponent } from './gallry/gallry.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full', title:'home'},
  {path:'home', component:homecomponent, title:'home'},
  {path:'about', component:AboutComponent, title:'about'},
  {path:'portfolio', component:GallryComponent, title:'portfolio'},
  {path:'contact', component:ContactComponent ,title:'contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
