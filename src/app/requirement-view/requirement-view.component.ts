import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-view',
  templateUrl: './requirement-view.component.html',
  styleUrls: ['./requirement-view.component.css']
})
export class RequirementViewComponent implements OnInit{

  viewId: number | null = null;

  vg: Requirement = {
    id: -1 ,
    title: '',
    contactMobileNo: '',
    status: null
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService) {}

    ngOnInit(): void {
      this.viewId = Number(this.route.snapshot.paramMap.get('id'));
      if (this.viewId) {
        this.requirementService
          .getRequirement(this.viewId)
          .subscribe((v) => {this.vg = {...this.vg, ...v}
          });
      }
    else{
      this.router.navigate(['/requirement-list']);
    }}

      onBack(): void {
        this.router.navigate(['/requirement-list']);
      }

}
