import { createAction, props } from '@ngrx/store';
import { ISelectedCharacterState } from './character.reducers'

const _setSelectedCharacter = createAction(
  '[character] Set character',
  props<{ selectedCharacter: ISelectedCharacterState}>()
);
const _resetSelectedCharacter= createAction('[character] Reset character');

export {
  _setSelectedCharacter as _setSelectedCharacter,
  _resetSelectedCharacter as _resetSelectedCharacter,
};
