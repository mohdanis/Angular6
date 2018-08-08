import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistingComponent } from './newslisting.component';

describe('NewslistingComponent', () => {
  let component: NewslistingComponent;
  let fixture: ComponentFixture<NewslistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
