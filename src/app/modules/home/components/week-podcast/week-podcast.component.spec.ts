import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPodcastComponent } from './week-podcast.component';

describe('WeekPodcastComponent', () => {
  let component: WeekPodcastComponent;
  let fixture: ComponentFixture<WeekPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekPodcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
