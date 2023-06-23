import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCumulativeComponent } from './monthly-cumulative.component';

describe('MonthlyCumulativeComponent', () => {
  let component: MonthlyCumulativeComponent;
  let fixture: ComponentFixture<MonthlyCumulativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyCumulativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyCumulativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
