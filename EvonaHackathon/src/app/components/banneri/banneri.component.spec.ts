import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanneriComponent } from './banneri.component';

describe('BanneriComponent', () => {
  let component: BanneriComponent;
  let fixture: ComponentFixture<BanneriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanneriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanneriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
