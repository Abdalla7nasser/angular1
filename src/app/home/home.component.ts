import { Component } from "@angular/core";

@Component ({
    selector: 'app-home',
    templateUrl:'./home.component.html',
    styleUrls: [
        './home.component.css'
    ]
})

export class homecomponent {
  
    imgPath: string ="./assets/img/avataaars.svg"
    imgWidth: number= 250
    altimg: string ="berger"
    // work():void {
    //     alert("helllo abdallah")
    // }
    // wwlcim():void{
    //     alert("koko")
    // }
    // onSel:boolean = true

    // frindes :string[]=['ahmed','abdo','noah']
    // // user:any ={name:'abdallah',age: 27}
    // user:any[]=[
    //     {name:'abdallah',age: 27, sealery:250000},
    //     {name:'noah',age: 47, sealery:500000},
    //     {name:'naser',age: 77, sealery:1000000}
    // ]
    // test:string="<span>hello zalte</span>"
    // usert:string ='noah'
}