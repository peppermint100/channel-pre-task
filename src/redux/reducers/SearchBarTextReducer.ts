import { SearchBarTextActionsType, SET_SEARCH_BAR_TEXT } from "../actions/SearchBarTextActions";

const initialState = "";

const SearchBarTextReducer = (state:string = initialState, action: SearchBarTextActionsType) => {
    if(action.type === SET_SEARCH_BAR_TEXT){
        return action.payload;
    }else{
        return state;
    }
}

export default SearchBarTextReducer;