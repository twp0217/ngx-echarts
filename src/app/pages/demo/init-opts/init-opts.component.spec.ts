import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitOptsComponent } from './init-opts.component';

describe('InitOptsComponent', () => {
  let component: InitOptsComponent;
  let fixture: ComponentFixture<InitOptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitOptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitOptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
