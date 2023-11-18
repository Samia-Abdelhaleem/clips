import { Component, OnInit } from '@angular/core';

// to become a container for my form & is used for isolation if i have many forms
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [provideNgxMask()],
})
export class RegisterComponent implements OnInit {
  showAlert: boolean = false;
  alertMsg: string = '';
  alertColor: string = '';
  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  registerForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    age: new UntypedFormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(80),
    ]),
    password: new UntypedFormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9!@#$%^&*()-_=+{};:,<.>]{8,10'),
    ]),
    confirm_password: new UntypedFormControl('', [Validators.required]),
    phoneNumber: new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.minLength(11),
    ]),
  });

  FormControl(key: string) {
    return this.registerForm.get(key) as UntypedFormControl;
  }
  // this function will return promise
  async register() {
    this.showAlert = true;
    this.alertMsg = ' please wait your account is being created ';
    this.alertColor = 'blue';
    const { email, password } = this.registerForm.value;
    const userCredentials = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }
}
