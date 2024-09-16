import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsClientComponent } from './results-client.component';

describe('ResultsClientComponent', () => {
  let component: ResultsClientComponent;
  let fixture: ComponentFixture<ResultsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
