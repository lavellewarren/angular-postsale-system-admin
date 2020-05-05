import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnidentifiedComponent } from './add-unidentified.component';

describe('AddUnidentifiedComponent', () => {
  let component: AddUnidentifiedComponent;
  let fixture: ComponentFixture<AddUnidentifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnidentifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnidentifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
