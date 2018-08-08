import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintproductComponent } from './printproduct.component';

describe('PrintproductComponent', () => {
  let component: PrintproductComponent;
  let fixture: ComponentFixture<PrintproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
