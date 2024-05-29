import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSeatComponent } from './single-seat.component';

describe('SingleSeatComponent', () => {
  let component: SingleSeatComponent;
  let fixture: ComponentFixture<SingleSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
