import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBadgerComponent } from './add-badger.component';

describe('AddBadgerComponent', () => {
  let component: AddBadgerComponent;
  let fixture: ComponentFixture<AddBadgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBadgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBadgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
