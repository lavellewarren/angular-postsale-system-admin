import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloacationComponent } from './reloacation.component';

describe('ReloacationComponent', () => {
  let component: ReloacationComponent;
  let fixture: ComponentFixture<ReloacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
