import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Survey2Component } from './survey2.component';

describe('Survey2Component', () => {
  let component: Survey2Component;
  let fixture: ComponentFixture<Survey2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Survey2Component]
    });
    fixture = TestBed.createComponent(Survey2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
