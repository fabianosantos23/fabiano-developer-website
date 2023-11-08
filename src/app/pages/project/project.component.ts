import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavService } from 'src/app/shared/services/nav.service';
import { IProjects, ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects!: IProjects[]
  projectId!: string

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    ){}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id')!;
    this.projects = this.projectService.getProjects(this.projectId)
  }

}
