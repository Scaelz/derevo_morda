/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanRepositoryService } from './plan-repository.service';

describe('Service: PlanRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanRepositoryService]
    });
  });

  it('should ...', inject([PlanRepositoryService], (service: PlanRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
