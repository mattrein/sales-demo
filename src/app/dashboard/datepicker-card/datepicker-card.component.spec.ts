import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCardComponent } from './datepicker-card.component';

describe('DatepickerCardComponent', () => {
  let component: DatepickerCardComponent;
  let fixture: ComponentFixture<DatepickerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
