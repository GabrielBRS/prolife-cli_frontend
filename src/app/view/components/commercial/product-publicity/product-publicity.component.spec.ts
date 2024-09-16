import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPublicityComponent } from './product-publicity.component';

describe('ProductPublicityComponent', () => {
  let component: ProductPublicityComponent;
  let fixture: ComponentFixture<ProductPublicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPublicityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
