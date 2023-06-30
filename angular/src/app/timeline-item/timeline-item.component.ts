import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() lastItem: boolean = false;
  @Input() title: string = "";
  @Input() date: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
