import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TedxListComponent } from './tedx-list.component';

describe('TedxListComponent', () => {
  let component: TedxListComponent;
  let fixture: ComponentFixture<TedxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TedxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TedxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
