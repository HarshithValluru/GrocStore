import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptStoreComponent } from './receipt-store.component';

describe('ReceiptStoreComponent', () => {
  let component: ReceiptStoreComponent;
  let fixture: ComponentFixture<ReceiptStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
