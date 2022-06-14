import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSaerchComponent } from './recipe-saerch.component';

describe('RecipeSaerchComponent', () => {
  let component: RecipeSaerchComponent;
  let fixture: ComponentFixture<RecipeSaerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSaerchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSaerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
