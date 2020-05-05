import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRelatedComponent } from './find-related.component';

describe('FindRelatedComponent', () => {
  let component: FindRelatedComponent;
  let fixture: ComponentFixture<FindRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
