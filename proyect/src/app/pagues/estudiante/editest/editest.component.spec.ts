import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditestComponent } from './editest.component';

describe('EditestComponent', () => {
  let component: EditestComponent;
  let fixture: ComponentFixture<EditestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
