import { Component, OnInit } from '@angular/core';
import { charaacters, Character } from '../characters';
import { MatDialog } from '@angular/material/dialog';
import { BadgeDialogComponent } from '../badge-dialog/badge-dialog.component';
import { AppStateInterface } from '../store/app';
import { Store } from '@ngrx/store';
import { selectSelectedCharcater } from '../store/charcter/character.selectors';
import { _setSelectedCharacter } from '../store/charcter/character.actions';
import { ISelectedCharacterState } from '../store/charcter/character.reducers';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  characters: Character[] = charaacters;

  matbadgeLikes: number = 0;
  isclicked = 'false';
  characterName!: string;
  addedCharacters = new Array();
  tring = JSON.stringify(this.addedCharacters);
  reduxCharacters: any;
  arraySplit = new Array();

  constructor(
    private matDialog: MatDialog // private store: Store<AppStateInterface>
  ) {

    window.localStorage.setItem('likes', '');
    this.reduxCharacters = window.localStorage.getItem('likes');



    if (this.reduxCharacters !== '') {
      this.arraySplit = this.reduxCharacters.split(',');
      this.matbadgeLikes = this.arraySplit.length;
      console.log(this.arraySplit);
      this.arraySplit.forEach((element) => {
        console.log(element + 'character');
        // element.isClicked = 'true';
        this.characters.forEach((element2) => {
          console.log(element2.name + 'arraysplit');
          if (element == element2.name) {
            element2.isClicked = 'true';
          }
        });
        // element.isClicked='false'
      });
    }
    else {
      this.matbadgeLikes = 0;
      console.log("Badge muttai")
    }

  }

  likesAdd(i: number) {
    this.characterName = this.characters[i].name;
    if (this.characters[i].isClicked === 'false' && this.arraySplit) {
      this.isclicked = 'true';
      this.matbadgeLikes++;
      this.characters[i].isClicked = this.isclicked;

      // this.reduxCharacters.push(this.characters[i]);
      if (this.addedCharacters.indexOf(this.characterName) == -1) {
        this.arraySplit.push(this.characterName);
        this.addedCharacters.push(this.characterName);
      }
      console.log(this.addedCharacters);

      if (typeof localStorage !== 'undefined') {
        // Local storage is supported
        console.log(this.addedCharacters.toString() + 'tring contents');
        localStorage.setItem('likes', this.arraySplit.toString());
        const data = window.localStorage.getItem('likes');
        console.log(data + 'vjhgh'); // Output: value
      } else {
        // Local storage is not supported
        console.log('Local storage is not supported');
      }

      // console.log(this.reduxCharacters);

      // this.store.dispatch(
      //   _setSelectedCharacter({
      //     selectedCharacter: {
      //       states: this.reduxCharacters.map((item: any)=>{return item}),
      //       // name: this.characters[i].name,
      //       // anime: this.characters[i].anime,
      //       // details: this.characters[i].details,
      //       // imgSrc: this.characters[i].imgSrc,
      //       // icon: this.characters[i].icon,
      //       // isClicked: null,
      //     },
      //   })
      // );
    } else {
      this.isclicked = 'false';
      this.matbadgeLikes--;
      this.characters[i].isClicked = this.isclicked;
      this.characterName = this.characters[i].name;
      // this.store.select(selectSelectedCharcater).subscribe((res:any)=>{
      //   let index = res.states.findIndex((item: { name: string; })=>item.name==this.characterName);
      //   console.log(index);
      //   res.states.splice(index,1);

      // })
      console.log(this.characterName);
      this.arraySplit.splice(
        this.arraySplit.indexOf(this.characterName),
        1
      );
      console.log(this.arraySplit);
      localStorage.setItem('likes', this.arraySplit.toString());
    }
  }

  openDialog() {
    console.log('Dialog opened!');
    console.log(window.localStorage.getItem('likes'));
    // this.store.select(selectSelectedCharc)
    const dialogRef = this.matDialog.open(BadgeDialogComponent, {
      width: '450px',
      disableClose: false,
      data: window.localStorage.getItem('likes'),
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data);
    });
  }
}
