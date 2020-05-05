import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyPackageComponent } from './identify-package.component';

describe('IdentifyPackageComponent', () => {
  let component: IdentifyPackageComponent;
  let fixture: ComponentFixture<IdentifyPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
