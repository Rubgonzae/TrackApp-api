import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevicesPage } from './list-devices.page';

describe('ListDevicesPage', () => {
  let component: ListDevicesPage;
  let fixture: ComponentFixture<ListDevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDevicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
