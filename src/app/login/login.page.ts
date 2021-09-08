import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  data: any;


  constructor(
    private apiService: APIService,
    private router: Router,
    public fb: FormBuilder,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  submitForm()
  {
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.apiService.getbyEmail(this.loginForm.value.email).toPromise().then((res) => {
          console.log(this.loginForm.value);
          this.data=res;
          console.log(this.data.password);
            if(this.data.password === this.loginForm.value.password )
            {
              alert('Login Successfully');
              this.loginForm.reset();
              sessionStorage.setItem('userDetails', JSON.stringify(this.data));
              this.router.navigate(['dashboard']);
            }
            else{
              alert('Invalid Id Or Password');
              this.loginForm.reset();
            }
      }).catch(err=> {
        // this.errorMsg = error.message;
        // this.successMsg = "";
        alert('User Not Exist');
        console.log(err.message);
        this.loginForm.reset();
        });
      }
  }
}
