import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../../../shared/services/plan-repository.service';
import { CommonModule } from '@angular/common';
import { PlanCardComponent } from "../plan-card/plan-card.component";
import {ContentContainer} from "../../../shared/components/content-container/content-container";

@Component({
  selector: 'app-plans-grid',
  templateUrl: './plans-grid.component.html',
  styleUrls: ['./plans-grid.component.css'],
  standalone: true,
  imports: [CommonModule, PlanCardComponent, ContentContainer],
})
export class PlansGridComponent implements OnInit {

  @Input()
  public plans$: Observable<Plan[]> = new Observable;


  constructor() { }

  ngOnInit() {
  }

}
