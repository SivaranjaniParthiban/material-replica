import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../app';
export const selectSelectedCharacterDetails = (state: AppStateInterface) => state;

export const selectSelectedCharcater= createSelector(
  selectSelectedCharacterDetails,
  (state) => state.selectedCharacter
);
