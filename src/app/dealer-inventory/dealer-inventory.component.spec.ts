import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerInventoryComponent } from './dealer-inventory.component';

describe('DealerInventoryComponent', () => {
  let component: DealerInventoryComponent;
  let fixture: ComponentFixture<DealerInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DealerInventoryComponent]
    });
    fixture = TestBed.createComponent(DealerInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
