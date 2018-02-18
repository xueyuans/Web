import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEdit1Component } from './widget-edit.component';

describe('WidgetEdit1Component', () => {
  let component: WidgetEdit1Component;
  let fixture: ComponentFixture<WidgetEdit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEdit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEdit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
