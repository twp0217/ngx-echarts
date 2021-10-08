import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoResizeComponent } from './auto-resize.component';

describe('AutoResizeComponent', () => {
  let component: AutoResizeComponent;
  let fixture: ComponentFixture<AutoResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoResizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
