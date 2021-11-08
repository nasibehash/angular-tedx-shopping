import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TedxComponent } from './tedx.component';

describe('TedxComponent', () => {
  let component: TedxComponent;
  let fixture: ComponentFixture<TedxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TedxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TedxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
