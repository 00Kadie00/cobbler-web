import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface DialogData {
  eventId: string,
  name: string,
  eventLog: string,
}

@Component({
  selector: 'cobbler-dialog-box-text-confirm',
  templateUrl: './dialog-box-text-confirm.html',
  styleUrls: ['./dialog-box-text-confirm.css']
})
export class DialogBoxTextConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

}
