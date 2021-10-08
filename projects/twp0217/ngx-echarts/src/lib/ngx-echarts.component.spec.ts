import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEchartsComponent } from './ngx-echarts.component';

describe('NgxEchartsComponent', () => {
  let component: NgxEchartsComponent;
  let fixture: ComponentFixture<NgxEchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
