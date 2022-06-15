import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDescriptionCardComponent } from './recipe-description-card.component';

describe('RecipeDescriptionCardComponent', () => {
  let component: RecipeDescriptionCardComponent;
  let fixture: ComponentFixture<RecipeDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDescriptionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
