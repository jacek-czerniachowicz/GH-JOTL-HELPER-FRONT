import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoDetailsComponent } from './hero-info-details.component';

describe('HeroInfoDetailsComponent', () => {
  let component: HeroInfoDetailsComponent;
  let fixture: ComponentFixture<HeroInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroInfoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
