import { createReducer, on } from '@ngrx/store';
import {
  _resetSelectedCharacter,
  _setSelectedCharacter,
} from './character.actions';

export interface ISelectedCharacterState {
//   name: string | null;
//   anime: string | null;
//   details: string | null;
//   imgSrc: string | null;
//   icon: string | null;
      //   isClicked: boolean | null;
      states:[] | null;
}
const _selectCharacternitialState: ISelectedCharacterState = {
//   name: null,
//   anime: null,
//   details: null,
//   imgSrc: null,
//   icon: null,
      //   isClicked: null,
      states:null,
};

export const selectedCharacterReducer = createReducer<ISelectedCharacterState>(
  _selectCharacternitialState,
  on(
    _setSelectedCharacter,
    (state, action): ISelectedCharacterState => ({
      ...state,states: action.selectedCharacter.states
      // name: action.selectedCharacter.name,
      // anime: action.selectedCharacter.anime,
      // details: action.selectedCharacter.details,
      // imgSrc: action.selectedCharacter.imgSrc,
      // icon: action.selectedCharacter.icon,
      // isClicked: false,
    })
  ),
  on(
    _resetSelectedCharacter,
    (state): ISelectedCharacterState => ({
      ...state,
      // name: null,
      // anime: null,
      // details: null,
      // imgSrc: null,
      // icon: null,
          // isClicked: true,
          states:null
    })
  )
);
