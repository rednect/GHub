import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
  standalone: false
})
export class LoginPage implements OnInit {

  ngOnInit() {
    console.log('It works!')
  }
}
