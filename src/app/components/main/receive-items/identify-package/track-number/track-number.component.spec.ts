import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackNumberComponent } from './track-number.component';

describe('TrackNumberComponent', () => {
  let component: TrackNumberComponent;
  let fixture: ComponentFixture<TrackNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
