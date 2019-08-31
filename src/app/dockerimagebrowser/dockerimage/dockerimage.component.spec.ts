import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerimageComponent } from './dockerimage.component';

describe('DockerimageComponent', () => {
  let component: DockerimageComponent;
  let fixture: ComponentFixture<DockerimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
