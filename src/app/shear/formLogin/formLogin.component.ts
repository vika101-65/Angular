import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api-sevice';

@Component({
  selector: 'app-my-link',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogin.component.css'],
  providers: [ApiService]
})
export class FormLogin implements OnInit {
  
  constructor(private myService: ApiService,
     private http: HttpClient
     ) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    console.log(form);
    console.log(form.value.mail);
    // console.log(this.myService);
    const body = {
      name: form.value.name,
      email: form.value.mail
    };

    this.myService.createUser(body);
    // this.http.post('http://localhost:5000/api/user', body).subscribe(res => console.log('post', res))
  }

  // save(form: NgForm) {
  //   console.log(form);
  //   this.http.get('http://localhost:5000/api/users').subscribe(res => console.log('res', res))
  // }
}
