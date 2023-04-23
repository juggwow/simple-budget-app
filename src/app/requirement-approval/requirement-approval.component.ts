import { Component } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-approval',
  templateUrl: './requirement-approval.component.html',
  styleUrls: ['./requirement-approval.component.css']
})
export class RequirementApprovalComponent {
  requirements: Requirement[] = []

  constructor(
    private requirementService: RequirementService) {
  }

  ngOnInit(): void {
    this.requirementService.getRequirements().subscribe(rs => this.requirements = rs)
  }

  onApprove(id: number): void {
    this.requirementService.approveRequirement(id).subscribe(
      ()=>{
        this.requirements = this.requirements.map((v)=>(v.id === id)?{...v,status:'A'}:{...v})
      }
    );
    }

    onReject(id: number): void {
      this.requirementService.rejectRequirement(id).subscribe(
        ()=>{
          this.requirements = this.requirements.map((v)=>(v.id === id)?{...v,status:'R'}:{...v})
        }
      );
      }

}