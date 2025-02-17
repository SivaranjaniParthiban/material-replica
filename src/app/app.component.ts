import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDrawer } from '@angular/material/sidenav';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/compat/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '270px',
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
        })
      ),
      transition('open => closed', [animate('.25s')]),
      transition('closed => open', [animate('.25s')]),
    ]),
  ],
})
export class AppComponent {
  title = 'Jarvis';
  error: string | null = null;
  loginForm!: FormGroup;

  passwordHide = true;
  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;
  @ViewChild('pageContent', { static: false }) pageContent!: ElementRef;
  user: Observable<firebase.default.User | null>;
  userdetails!: firebase.default.User | null;
  expanded: boolean = false;
  expandedEvent = new EventEmitter<boolean>();
  hasBackdrop: boolean = false;
  provider = new GoogleAuthProvider();
  submitted = false;

  constructor(
    public fbAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.expandedEvent.next(false);
    this.user = fbAuth.authState;

    this.user.subscribe((res) => {
      this.userdetails = res;
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.error = null;
  }
  changedExpanded(changedExpanded: boolean) {
    this.expanded = changedExpanded;
    this.hasBackdrop = changedExpanded;
    this.expandedEvent.next(this.expanded);
  }

  backdropClicked() {
    this.expanded = false;
    this.hasBackdrop = false;
    this.expandedEvent.next(this.expanded);
  }

  ngAfterViewInit(): void {
    const pageContentEl = this.pageContent.nativeElement as HTMLElement;
    pageContentEl.style.marginLeft = '75px';
    this.expandedEvent.next(false);
  }

  login() {
    this.fbAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }
  get f() {
    return this.loginForm.controls;
  }

  showSnackbar(msg: string, action: string, duration?: number | null) {
    this.snackBar.open(msg, action, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: duration ? duration : undefined,
      panelClass: ['snack'],
    });
  }
  onSubmit() {
    const username: string = this.f['username'].value;
    const password: string = this.f['password'].value;

    console.log('Merg🔥🔥');

    if (username == '' || password == '') {
      this.error = 'Invalid Credentials';
    }
    return firebase.default
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then((response) => {
        this.loginForm.reset();
        alert('Your account has been created!');
      })
      .catch((error) => {
        this.error = error.error.responseMessage;
        this.showSnackbar(error.message, 'OK', 2000);
      });
  }

  onLogin() {
    const username: string = this.f['username'].value;
    const password: string = this.f['password'].value;
    if (username == '' || password == '') {
      this.error = 'Invalid Credentials';
    }
    return firebase.default
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((response) => {
        this.showSnackbar(
          'Access Granted , Agent . Welcome To S.H.I.E.L.D  ',
          '',
          2000
        );
        this.loginForm.reset();
      })
      .catch((error) => {
        this.error = error.error.responseMessage;
        this.showSnackbar(error.message, 'OK', 2000);
      });
  }
}
