import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAdminComponent } from './warehouse-admin.component';

describe('WarehouseAdminComponent', () => {
  let component: WarehouseAdminComponent;
  let fixture: ComponentFixture<WarehouseAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
