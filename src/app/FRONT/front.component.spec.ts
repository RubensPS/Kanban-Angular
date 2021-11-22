import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FRONTComponent } from './front.component';

describe('FRONTComponent', () => {
  let component: FRONTComponent;
  let fixture: ComponentFixture<FRONTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FRONTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FRONTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
