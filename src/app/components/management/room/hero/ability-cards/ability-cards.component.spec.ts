import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityCardsComponent } from './ability-cards.component';

describe('AbilityCardsComponent', () => {
  let component: AbilityCardsComponent;
  let fixture: ComponentFixture<AbilityCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbilityCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbilityCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
