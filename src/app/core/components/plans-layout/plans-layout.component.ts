import { Component, OnInit } from '@angular/core';
import { PlansSearchBarComponent } from "../plans-search-bar/plans-search-bar.component";
import { PlansGridComponent } from "../plans-grid/plans-grid.component";
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Plan, PlanFilter, PlanRepositoryService } from '../../../shared/services/plan-repository.service';

@Component({
  selector: 'app-plans-layout',
  templateUrl: './plans-layout.component.html',
  styleUrls: ['./plans-layout.component.css'],
  imports: [PlansSearchBarComponent, PlansGridComponent],
})
export class PlansLayoutComponent implements OnInit {

  private filters$ = new BehaviorSubject<PlanFilter>({});
  public filteredPlans$ = this.filters$.pipe(
    switchMap(filters => this.planService.getPlans(filters))
  );

  constructor(private planService: PlanRepositoryService) { }

  ngOnInit() {
  }


  public updateFilters(filters: PlanFilter): void {
    this.filters$.next(filters);
  }
}
