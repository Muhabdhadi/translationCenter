import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAboutUsComponent } from './a-about-us.component';

describe('AAboutUsComponent', () => {
  let component: AAboutUsComponent;
  let fixture: ComponentFixture<AAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
