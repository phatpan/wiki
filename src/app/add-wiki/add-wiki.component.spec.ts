import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWikiComponent } from './add-wiki.component';

describe('AddWikiComponent', () => {
  let component: AddWikiComponent;
  let fixture: ComponentFixture<AddWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
