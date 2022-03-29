import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailusComponent } from './mailus.component';

describe('MailusComponent', () => {
  let component: MailusComponent;
  let fixture: ComponentFixture<MailusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
