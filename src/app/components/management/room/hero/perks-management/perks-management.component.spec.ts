import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerksManagementComponent } from './perks-management.component';

describe('PerksManagementComponent', () => {
  let component: PerksManagementComponent;
  let fixture: ComponentFixture<PerksManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerksManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerksManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
