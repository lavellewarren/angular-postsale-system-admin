import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../auth.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  type: FormGroup;
  pwdError = false;
  togglePwd = true;
  success = false;
  constructor(private formBuilder: FormBuilder, private util: UtilsService) {}

  ngOnInit() {
    this.type = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  sendResetLink() {

    console.log(this.type.value);
    if (this.type.valid) {
      
      this.util.ApiForgotPassword(this.type.value, scs => {
        console.log(scs);
        this.success = true;
      }, error => {
        console.log(error);
      });
    }
  }
}
