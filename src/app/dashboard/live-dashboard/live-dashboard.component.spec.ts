import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveDashboardComponent} from './live-dashboard.component';

describe('LiveDashboardComponent', () => {
  let component: LiveDashboardComponent;
  let fixture: ComponentFixture<LiveDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveDashboardComponent]
    });
    fixture = TestBed.createComponent(LiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
