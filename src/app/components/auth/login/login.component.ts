import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../auth.component.css']
})
export class LoginComponent implements OnInit {
  type: FormGroup;
  pwdError = false;
  togglePwd = true;

  constructor(private formBuilder: FormBuilder, private util: UtilsService) {
  }

  ngOnInit() {
    this.type = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.type.valid) {
      this.util.ApiLogin(this.type.value, success => {
        this.util.Navigate('/app/projects');
      }, error => {
        console.log(error);
        this.pwdError = true;
      });
      
    }
  }
}

