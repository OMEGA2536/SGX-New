import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  token: string|undefined;
  recaptchaErrors:boolean = true;
  constructor(
    private fb: FormBuilder,
  ) {
    this.loginForm = this.createLoginForm();
    this.token = undefined;    
   }
  createLoginForm(): FormGroup<any> {
    return this.fb.group({
      userName:['', [Validators.required]],
      password:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  submit(){
   
  }
  confirmLogin(){
    if(this.token == undefined){
      console.log("token",this.token)
      return;
    }else{
      console.log(this.loginForm.value)
      console.log(this.token)
    }
  
  }
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.log(`Token [${this.token}] generated`);
  }
}
