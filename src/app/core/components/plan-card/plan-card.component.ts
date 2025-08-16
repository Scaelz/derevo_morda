import { Component, Input, OnInit } from '@angular/core';
import { Plan } from '../../../shared/services/plan-repository.service';
import {ContentContainer} from "../../../shared/components/content-container/content-container";

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
  imports: [ContentContainer ]
})
export class PlanCardComponent implements OnInit {

  @Input()
  public plan!: Plan;

  constructor() { }

  ngOnInit() {
  }

}
