/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlansGridComponent } from './plans-grid.component';

describe('PlansGridComponent', () => {
  let component: PlansGridComponent;
  let fixture: ComponentFixture<PlansGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
