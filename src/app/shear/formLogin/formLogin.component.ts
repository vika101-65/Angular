import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-my-link',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogin.component.css'],
  providers: [MyServiceService]
})
export class FormLogin implements OnInit {
  href: string = "";
  errorMessage: String = "";
  header?: String;

  constructor(private myService: MyServiceService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.href = this.router.url;
     this.header = this.href.slice(1);
  }

  save(form: NgForm) {
    const body = {
      email: form.value.email,
      password: form.value.password
    };

    if (this.href === '/registration') {
      this.myService.createUser(body).subscribe(
        res => {
          console.log('res', res);
          if (res.message) {
            this.errorMessage = res.message;
          }
        }
      );
    };

    if (this.href === '/login') {
      this.myService.loginUser(body).subscribe(
        res => {
          console.log('res', res);
        }
      )
    }
    form.reset();
  }

  checkForEmptinessEmail(form: NgForm) {
    console.log('checkForEmptinessEmail', form.value.email);
    if(form.value.email) {
      this.errorMessage = '';
    }
  }
}
