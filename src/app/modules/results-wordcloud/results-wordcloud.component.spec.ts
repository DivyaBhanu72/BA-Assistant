import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsWordcloudComponent } from './results-wordcloud.component';

describe('ResultsWordcloudComponent', () => {
  let component: ResultsWordcloudComponent;
  let fixture: ComponentFixture<ResultsWordcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsWordcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsWordcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
