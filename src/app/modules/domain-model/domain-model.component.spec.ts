import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainModelComponent } from './domain-model.component';

describe('DomainModelComponent', () => {
  let component: DomainModelComponent;
  let fixture: ComponentFixture<DomainModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
