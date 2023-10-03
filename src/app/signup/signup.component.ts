import { Component,OnInit } from '@angular/core';
import { data } from 'jquery';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
constructor(){}
ngOnInit(): void {}
  signup(data:Object):void{
    console.warn(data)

}
}
