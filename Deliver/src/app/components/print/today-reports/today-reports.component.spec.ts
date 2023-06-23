import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayReportsComponent } from './today-reports.component';

describe('TodayReportsComponent', () => {
  let component: TodayReportsComponent;
  let fixture: ComponentFixture<TodayReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
