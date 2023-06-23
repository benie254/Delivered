import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCumulativeComponent } from './daily-cumulative.component';

describe('DailyCumulativeComponent', () => {
  let component: DailyCumulativeComponent;
  let fixture: ComponentFixture<DailyCumulativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCumulativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCumulativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
