import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegtComponent } from './regt.component';

describe('RegtComponent', () => {
  let component: RegtComponent;
  let fixture: ComponentFixture<RegtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
