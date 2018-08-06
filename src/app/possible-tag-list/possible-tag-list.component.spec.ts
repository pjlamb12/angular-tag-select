import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleTagListComponent } from './possible-tag-list.component';

describe('PossibleTagListComponent', () => {
  let component: PossibleTagListComponent;
  let fixture: ComponentFixture<PossibleTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibleTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
