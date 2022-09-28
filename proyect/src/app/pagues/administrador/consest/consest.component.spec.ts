import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsestComponent } from './consest.component';

describe('ConsestComponent', () => {
  let component: ConsestComponent;
  let fixture: ComponentFixture<ConsestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
