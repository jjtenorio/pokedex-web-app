import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokefilterlistComponent } from './pokefilterlist.component';

describe('PokefilterlistComponent', () => {
  let component: PokefilterlistComponent;
  let fixture: ComponentFixture<PokefilterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokefilterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokefilterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
