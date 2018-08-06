import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTagListComponent } from './selected-tag-list.component';

describe('SelectedTagListComponent', () => {
  let component: SelectedTagListComponent;
  let fixture: ComponentFixture<SelectedTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
