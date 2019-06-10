import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEvoDisplayComponent } from './poke-evo-display.component';

describe('PokeEvoDisplayComponent', () => {
  let component: PokeEvoDisplayComponent;
  let fixture: ComponentFixture<PokeEvoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeEvoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeEvoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
