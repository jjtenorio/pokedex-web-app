import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeinfoComponent } from './pokeinfo.component';

describe('PokeinfoComponent', () => {
  let component: PokeinfoComponent;
  let fixture: ComponentFixture<PokeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
