import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AContactUsComponent } from './a-contact-us.component';

describe('AContactUsComponent', () => {
  let component: AContactUsComponent;
  let fixture: ComponentFixture<AContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
