import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  NavigationEnd,
  Event as NavigationEvent,
  Router,
  Scroll,
} from '@angular/router';
import { filter, Subscription } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {
  @Input() expanded!: EventEmitter<boolean>;
  @Output() changedExpanded = new EventEmitter<boolean>();
  isExpanded = false;
  user: any;
  userdetails: any;
  backgroundColor = 'White';
  url: string = '';
  event$!: Subscription;
  constructor(private router: Router, public fbAuth: AngularFireAuth) {
    this.user = fbAuth.authState;
    this.user.subscribe((res: any) => {
      this.userdetails = res;
    });

    // this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
    //   if (event instanceof Scroll) {
    //     this.url = event.routerEvent.url;
    //   }
    // });
    // const events = router.events.pipe(
    //   filter((event: any) => event instanceof NavigationEnd)
    // );
    // events.subscribe((e: NavigationEnd) => {
    //   this.url = e.urlAfterRedirects;
    //   console.log(this.url);
    // });
  }

  collapseMenu() {
    this.isExpanded = false;
    this.setChangeExpanded();
  }

  ngAfterViewInit(): void {
    this.expanded.subscribe((val) => {
      this.isExpanded = val;
    });
  }

  setChangeExpanded() {
    if (this.isExpanded) {
      this.changedExpanded.next(true);
    }
    if (!this.isExpanded) {
      this.changedExpanded.next(false);
    }
  }

  logout() {
    this.fbAuth.signOut();
  }
}
