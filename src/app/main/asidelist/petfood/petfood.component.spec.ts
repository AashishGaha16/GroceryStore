import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetfoodComponent } from './petfood.component';

describe('PetfoodComponent', () => {
  let component: PetfoodComponent;
  let fixture: ComponentFixture<PetfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
