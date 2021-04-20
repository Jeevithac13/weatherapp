import { TestBed } from '@angular/core/testing';

import { TodayweatherService } from './todayweather.service';

describe('TodayweatherService', () => {
  let service: TodayweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
