import { ModalActionsType, SET_MODAL_STATE } from "../actions/ModalActions";

const initialState = false;

const ModalReducer = (state: boolean = initialState, action: ModalActionsType):boolean => {
    switch(action.type){
        case SET_MODAL_STATE:
            return action.payload;
        default:
            return initialState;
    }
}

export default ModalReducer;