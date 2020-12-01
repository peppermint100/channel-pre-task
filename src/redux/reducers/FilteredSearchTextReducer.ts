import { FilteredSearchTextActionType, SET_SEARCH_BAR_TEXT } from "../actions/FilteredSearchTextAction";

const initialState = "";

const FilteredSearchTextReducer = (state:string = initialState, action: FilteredSearchTextActionType) => {
    if(action.type === SET_SEARCH_BAR_TEXT){
        return action.payload;
    }else{
        return state;
    }
}

export default FilteredSearchTextReducer;