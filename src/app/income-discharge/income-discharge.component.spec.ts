import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDischargeComponent } from './income-discharge.component';

describe('IncomeDischargeComponent', () => {
  let component: IncomeDischargeComponent;
  let fixture: ComponentFixture<IncomeDischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeDischargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
