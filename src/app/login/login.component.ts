import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    alert('Email = email@email.com, password = password');
  }

  logIn(form: NgForm) {
    this.authService.logIn(form.value.email, form.value.password);
  }
}
