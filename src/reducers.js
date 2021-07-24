import {CHANGE_SEARCHFIELD} from './constants';

const initialState = {
  searchfield: ''
}

export const searchHumans = (state=initialState, action={}) => { //here we specify the parameters to avoid geting errors
  switch(action.type){
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchfield:action.payload});
    default: 
      return state;
  }
}