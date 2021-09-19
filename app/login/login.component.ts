import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../Service/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  path = 'http://localhost:3000/login';
  constructor(private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required,]],
      password: ['', [Validators.required,]]
    });
  }

  ngOnInit() {
  }

  signin(formGroup: any){
    let signinObj: any = {};

    signinObj.email = formGroup.value.email,
    signinObj.password = formGroup.value.password

    this.httpService.post(this.path, signinObj).subscribe(val => {
      try {
        if(signinObj.email == val.email && signinObj.password == val.password){
          Swal.fire({  
            position: 'center',  
            icon: 'success',  
            title: 'Login Successful',  
            showConfirmButton: false,  
            timer: 2000  
          });
          this.router.navigate(['/quizzes']);
        }
      } catch (error) {
        Swal.fire({  
          icon: 'error',  
          title: 'Incorrect Email or Password',  
          text: 'Try Again!'
        }); 
      }
      // console.log('val', val);
      // console.log('login obj', signinObj);
      // this.router.navigate(['/quizzes']);
      // console.log(val.email);
    });
  }

}
