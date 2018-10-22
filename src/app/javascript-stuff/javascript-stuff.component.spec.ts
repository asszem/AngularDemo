import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptStuffComponent } from './javascript-stuff.component';

describe('JavascriptStuffComponent', () => {
  let component: JavascriptStuffComponent;
  let fixture: ComponentFixture<JavascriptStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
