import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSamplesComponent } from './bootstrap-samples.component';

describe('BootstrapSamplesComponent', () => {
  let component: BootstrapSamplesComponent;
  let fixture: ComponentFixture<BootstrapSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
