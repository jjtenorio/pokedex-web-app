import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemenuComponent } from './pokemenu.component';

describe('PokemenuComponent', () => {
  let component: PokemenuComponent;
  let fixture: ComponentFixture<PokemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
