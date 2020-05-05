import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindReturnComponent } from './find-return.component';

describe('FindReturnComponent', () => {
  let component: FindReturnComponent;
  let fixture: ComponentFixture<FindReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
