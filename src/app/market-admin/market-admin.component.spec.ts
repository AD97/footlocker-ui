import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketAdminComponent } from './market-admin.component';

describe('MarketAdminComponent', () => {
  let component: MarketAdminComponent;
  let fixture: ComponentFixture<MarketAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
