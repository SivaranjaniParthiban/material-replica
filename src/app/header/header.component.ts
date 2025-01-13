import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, share, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, AfterViewInit {
  @Input() expanded!: EventEmitter<boolean>;
  @Output() changedExpanded = new EventEmitter<boolean>();
  isExpanded = false;
  subscription: any;
  rxTime = new Date();
  user: any;
  userdetails: any;
  userMe: any = '';
  constructor(fbAuth: AngularFireAuth) {
    fbAuth.authState.subscribe((user) => {
      console.log(user?.displayName);
      this.userMe = user?.displayName;
    });
  }

  ngAfterViewInit(): void {
    this.expanded.subscribe((val) => {
      this.isExpanded = val;
    });

    this.subscription = timer(0, 6000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.rxTime = time;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setChangeExpanded() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.changedExpanded.next(true);
    }
    if (!this.isExpanded) {
      this.changedExpanded.next(false);
    }
  }
}
