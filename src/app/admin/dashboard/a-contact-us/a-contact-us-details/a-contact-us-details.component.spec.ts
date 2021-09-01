import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AContactUsDetailsComponent } from './a-contact-us-details.component';

describe('AContactUsDetailsComponent', () => {
  let component: AContactUsDetailsComponent;
  let fixture: ComponentFixture<AContactUsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AContactUsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AContactUsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
