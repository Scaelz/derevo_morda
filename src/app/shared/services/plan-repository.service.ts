import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum Tag {
  BEGINNERS = 'beginners',
}

export interface PlanStep {
  description: string;
  image: string;
}

export interface Plan {
  name: string;
  description: string;
  photo?: string;
  blueprint: string;
  model?: string;
  instruction?: PlanStep[];
  tags: Tag[];
  comments?: string[];
  rating?: string;
}

export interface PlanFilter {
  name?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlanRepositoryService {

constructor(private http: HttpClient) { }


public getPlans(filter: PlanFilter = {}): Observable<Plan[]> {
  return of([
    {
      photo: 'https://foter.com/photos/367/foret-square-wooden-stool.jpg',
      name: 'TestPlan',
      description: 'Test description',
      blueprint: '',
    },
    {
      photo: 'https://foter.com/photos/367/foret-square-wooden-stool.jpg',
      name: 'TestPlan',
      description: 'Test description',
      blueprint: '',
    },
    {
      photo: 'https://foter.com/photos/367/foret-square-wooden-stool.jpg',
      name: 'TestPlan',
      description: 'Test description',
      blueprint: '',
    },
    {
      photo: 'https://foter.com/photos/367/foret-square-wooden-stool.jpg',
      name: 'TestPlan',
      description: 'Test description',
      blueprint: '',
    },
    {
      photo: 'https://foter.com/photos/367/foret-square-wooden-stool.jpg',
      name: 'TestPlan',
      description: 'Test description',
      blueprint: '',
    }
  ] as Plan[])
}
}
