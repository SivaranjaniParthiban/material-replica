import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordianComponent } from './accordian/accordian.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgOptimizedImage } from '@angular/common';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { MatBadgeModule } from '@angular/material/badge';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ButtonComponent } from './button/button.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BadgeDialogComponent } from './badge-dialog/badge-dialog.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CheckBoxComponent } from './check-box/check-box.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatchipsComponent } from './matchips/matchips.component';
import { MatChipsModule } from '@angular/material/chips';
var config = {
  apiKey: 'AIzaSyDZDD3oXXVW66Sl_WBt_XfylF_0qDhuCzM',
  authDomain: 'tony-ee200.firebaseapp.com',
  projectId: 'tony-ee200',
  storageBucket: 'tony-ee200.firebasestorage.app',
  messagingSenderId: '800386993805',
  appId: '1:800386993805:web:9efb6f8328f23e192d9cc4',
  measurementId: 'G-XQJZM3Q7S4',
};
@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    MenuComponent,
    HeaderComponent,
    ScrollTopComponent,
    AutoCompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    BadgeDialogComponent,
    CheckBoxComponent,
    MatchipsComponent,
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    NgOptimizedImage,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, //
    }),
  ],
  providers: [],
  bootstrap: [AppComponent, CardComponent],
})
export class AppModule {}
