import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogin } from './formLogin.component';

describe('MyLinkComponent', () => {
  let component: FormLogin;
  let fixture: ComponentFixture<FormLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLogin ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
