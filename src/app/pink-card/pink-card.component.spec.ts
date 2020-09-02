import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkCardComponent } from './pink-card.component';

describe('PinkCardComponent', () => {
  let component: PinkCardComponent;
  let fixture: ComponentFixture<PinkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
