import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YatableComponent } from './yatable.component';

describe('YatableComponent', () => {
  let component: YatableComponent;
  let fixture: ComponentFixture<YatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
