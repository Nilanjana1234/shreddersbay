import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [NavParams]
})
export class HomePage implements OnInit {
  role: any;

  constructor(
    public navParams: NavParams,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.role = this.activateRoute.snapshot.params.role;
  }
  login(role){
    alert(role);
    this.router.navigate(['login', {role}]);
 }
 signup(role){
  alert(role);
  this.router.navigate(['signup', {role}]);
}

}
