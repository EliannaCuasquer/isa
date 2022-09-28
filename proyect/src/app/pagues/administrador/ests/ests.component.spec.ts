import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstsComponent } from './ests.component';

describe('EstsComponent', () => {
  let component: EstsComponent;
  let fixture: ComponentFixture<EstsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
