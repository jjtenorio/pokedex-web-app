import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedisplayComponent } from './pokedisplay.component';

describe('PokedisplayComponent', () => {
  let component: PokedisplayComponent;
  let fixture: ComponentFixture<PokedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
