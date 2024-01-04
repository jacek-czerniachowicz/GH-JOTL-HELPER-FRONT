import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoDialogComponent } from './hero-info-dialog.component';

describe('HeroInfoDetailsComponent', () => {
  let component: HeroInfoDialogComponent;
  let fixture: ComponentFixture<HeroInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroInfoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
