import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  topLabel = 'Backend Development';
  title = 'Tasks';
  bottomLabel = 'Upadated 3 minutes ago';

  constructor() { }

  ngOnInit() {
  }

}
