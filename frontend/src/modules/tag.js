import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const SELECTTAGS = "main/SELECTTAGS";
const UNSELECTTAGS = "main/UNSELECTTAGS";

export const selectTags = createAction(SELECTTAGS);
export const unselectTags = createAction(UNSELECTTAGS);

const initialState = {
    selectedTags:[],
};

const tag = handleActions(
  {
    [SELECTTAGS]: (state, action) => ({selectedTags: state.selectedTags.concat(action.payload)}),
    [UNSELECTTAGS]: (state, action) => ({selectedTags: state.selectedTags.filter(state => state.selectedTags =! action.payload)}),
  },                                                                            
  initialState,
);

export default tag;
