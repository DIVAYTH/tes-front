import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";
import {Request} from "../../classes/request";
import {RequestDecision} from "../../classes/request-decision";

@Component({
  selector: 'app-request-decision',
  templateUrl: './request-decision.component.html',
  styleUrls: ['./request-decision.component.css']
})
export class RequestDecisionComponent implements OnInit {
  decision: string = 'одобрить'
  rang: string = ""

  declare result: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: { request: Request }, private dialog: MatDialogRef<RequestDecisionComponent>
    , private adminService: AdminService) {
  }

  ngOnInit(): void {
  }

  sendResult() {
    if (this.data.request.type == 'вступление') {
      this.adminService.allowRequestEnter(new RequestDecision(this.data.request, this.decision, this.rang)).subscribe(() => {
        this.closeDialog()
      })
    } else if (this.data.request.type == 'завершение_квеста') {
      this.adminService.allowRequestEnd(new RequestDecision(this.data.request, this.decision, "")).subscribe(() => {
        this.closeDialog()
      })
    }
  }

  closeDialog() {
    this.dialog.close();
  }

}
