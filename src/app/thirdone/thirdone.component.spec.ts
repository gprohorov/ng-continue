import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdoneComponent } from './thirdone.component';

describe('ThirdoneComponent', () => {
  let component: ThirdoneComponent;
  let fixture: ComponentFixture<ThirdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
