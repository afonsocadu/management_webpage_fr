import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesAssociatedComponent } from './technologies-associated.component';

describe('TechnologiesAssociatedComponent', () => {
  let component: TechnologiesAssociatedComponent;
  let fixture: ComponentFixture<TechnologiesAssociatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesAssociatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesAssociatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
