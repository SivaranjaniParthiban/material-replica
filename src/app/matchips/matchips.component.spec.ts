import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchipsComponent } from './matchips.component';

describe('MatchipsComponent', () => {
  let component: MatchipsComponent;
  let fixture: ComponentFixture<MatchipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchipsComponent]
    });
    fixture = TestBed.createComponent(MatchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
