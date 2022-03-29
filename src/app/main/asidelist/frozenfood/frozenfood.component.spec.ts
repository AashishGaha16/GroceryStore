import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenfoodComponent } from './frozenfood.component';

describe('FrozenfoodComponent', () => {
  let component: FrozenfoodComponent;
  let fixture: ComponentFixture<FrozenfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrozenfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
