import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearchLinksComponent } from './google-search-links.component';

describe('GoogleSearchLinksComponent', () => {
  let component: GoogleSearchLinksComponent;
  let fixture: ComponentFixture<GoogleSearchLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSearchLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSearchLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
