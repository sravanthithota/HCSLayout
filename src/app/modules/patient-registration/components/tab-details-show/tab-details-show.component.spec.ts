import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDetailsShowComponent } from './tab-details-show.component';

describe('TabDetailsShowComponent', () => {
  let component: TabDetailsShowComponent;
  let fixture: ComponentFixture<TabDetailsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDetailsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDetailsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
