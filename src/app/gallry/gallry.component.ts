import { Component } from '@angular/core';

@Component({
  selector: 'app-gallry',
  templateUrl: './gallry.component.html',
  styleUrls: ['./gallry.component.css']
})
export class GallryComponent {

  imgPath:string[] =["./assets/img/poert1.png","./assets/img/port2.png","./assets/img/port3.png",
                     "./assets/img/poert1.png","./assets/img/port2.png","./assets/img/port3.png"]
  imgWidth: number= 350
  altimg: string ="berger"
}
