import { Injectable } from '@angular/core';
import { Project } from '../model/class/project';
import { BehaviorSubject, Observable } from 'rxjs';
import { myProjects } from '../model/datas/projects';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private selectedProjectSource = new BehaviorSubject<Project>(myProjects[0]);
  public selectedProject$: Observable<Project>;

  constructor(private router: Router) {
    this.initObservables();
  }

  private initObservables(): void {
    this.selectedProject$ = this.selectedProjectSource.asObservable();
  }

  isProjectSelected(project: Project): boolean {
    return project.name == this.selectedProjectSource.getValue().name;
  }

  selectProject(project: Project): void {
    this.selectedProjectSource.next(project);
    //this.router.navigate(['project']);
  }
}
