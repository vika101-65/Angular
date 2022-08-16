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

  constructor(private myService: MyServiceService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
  }

  save(form: NgForm) {
    const body = {
      email: form.value.email,
      password: form.value.password
    };

    console.log(body);
    if (this.href === '/registration') {
      this.myService.createUser(body).subscribe(
        res => {
          console.log('res', res);
          if (res.message) {
            this.errorMessage = res.message;
          }
        }
      );
      form.reset();
    }


  }

  // save(form: NgForm) {
  //   console.log(form);
  //   this.http.get('http://localhost:5000/api/users').subscribe(res => console.log('res', res))
  // }
}
