import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerpwdComponent } from './serverpwd.component';

describe('ServerpwdComponent', () => {
  let component: ServerpwdComponent;
  let fixture: ComponentFixture<ServerpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
