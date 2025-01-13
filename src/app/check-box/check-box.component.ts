import { Component } from '@angular/core';
import { animes, animesList } from './animes';
import { getDatabase, ref, child, get } from 'firebase/database';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent {
  // anime: string[] = animes;
  animeList!: animesList[];
  animeName: any;
  watchedAnimeList: string[] = [];
  watchedAnimeList2: string[] = [];
  dbRef = ref(getDatabase());

  constructor() {
    get(child(this.dbRef, `anime`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.animeList = snapshot.val();
          console.log(this.animeList);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addToWatchedList(i: number) {
    // this.animeName = this.anime[i];
    // this.watchedAnimeList.push(this.animeName);
    const idsample = this.animeList[i].id - 1;
  console.log(
    firebase.default
      .database()
      .ref(`anime` + idsample)
      .get()
  );  
    console.log(this.animeList[i].id + 'id');
    console.log(this.animeList[i].list + ' added');
  
    // this.animeList.splice(i, 1)
  }

  sendToWatchedAnimes() {
    //  this.watchedAnimeList.push(this.watchedAnimeList2);
    console.log(this.watchedAnimeList);
    this.watchedAnimeList;
  }
}
