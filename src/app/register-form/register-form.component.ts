import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phoneNumbers: Array<string> = ['+359', '088', '+742']
  model ={}
  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

}
