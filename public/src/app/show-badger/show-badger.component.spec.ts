import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBadgerComponent } from './show-badger.component';

describe('ShowBadgerComponent', () => {
  let component: ShowBadgerComponent;
  let fixture: ComponentFixture<ShowBadgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBadgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBadgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
