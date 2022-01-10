import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router) {
  }

  loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.router.navigate(['/']);
    }
  }
}
