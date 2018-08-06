import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSelectTrComponent } from './tag-select-tr.component';

describe('TagSelectTrComponent', () => {
  let component: TagSelectTrComponent;
  let fixture: ComponentFixture<TagSelectTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSelectTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSelectTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
