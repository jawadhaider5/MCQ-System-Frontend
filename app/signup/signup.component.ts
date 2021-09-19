import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../Service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup: FormGroup;
  path = 'http://localhost:3000/signup';


  constructor(private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
      phone: ['', [Validators.required,]],
      id: ['', [Validators.required,]]
    });
  }

  ngOnInit() {
  }

  signup(formGroup: any){
    let signupObj: any = {};
    signupObj.name = formGroup.value.name,
    signupObj.email = formGroup.value.email,
    signupObj.password = formGroup.value.password,
    signupObj.phone = formGroup.value.phone,
    signupObj.id = Math.floor(Math.random()*1000)

    console.log('Signup Form Group', signupObj);

    this.httpService.post(this.path, signupObj).subscribe(val => {
      console.log('Post API Call', val);
      // formGroup.reset();
    });
    
    this.router.navigate(['/login']);
  }

}
