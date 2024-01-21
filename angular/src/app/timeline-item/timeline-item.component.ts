import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../model/class/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() lastItem: boolean = false;
  @Input() hasBg: boolean = false;
  @Input() project: Project;
  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
