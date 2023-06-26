import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTensorComponent } from './create-tensor.component';

describe('CreateTensorComponent', () => {
  let component: CreateTensorComponent;
  let fixture: ComponentFixture<CreateTensorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTensorComponent]
    });
    fixture = TestBed.createComponent(CreateTensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
