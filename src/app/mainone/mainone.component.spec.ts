import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainoneComponent } from './mainone.component';

describe('MainoneComponent', () => {
  let component: MainoneComponent;
  let fixture: ComponentFixture<MainoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
