import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ISelectedCharacterState, selectedCharacterReducer } from './charcter/character.reducers'
export interface AppStateInterface {

      selectedCharacter: ISelectedCharacterState;
      
}
export const reducers: ActionReducerMap<AppStateInterface> = {
      selectedCharacter: selectedCharacterReducer

};
