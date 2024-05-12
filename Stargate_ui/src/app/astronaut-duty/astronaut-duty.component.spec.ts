import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautDutyComponent } from './astronaut-duty.component';

describe('AstronautDutyComponent', () => {
  let component: AstronautDutyComponent;
  let fixture: ComponentFixture<AstronautDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstronautDutyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AstronautDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
