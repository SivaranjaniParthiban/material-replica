import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-badge-dialog',
  templateUrl: './badge-dialog.component.html',
  styleUrls: ['./badge-dialog.component.scss'],
})
export class BadgeDialogComponent {
  animeNames = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
    this.animeNames = this.data.split(",");
    
  }



  ngOnInit() {
    console.log(this.animeNames);
  }
}
