export const SET_MODAL_STATE = "SET_MODAL_STATE" as const;

export const setModalState = (payload: boolean) => ({
    type: SET_MODAL_STATE,
    payload
});

type setModalStateType = ReturnType<typeof setModalState>;

export type ModalActionsType = setModalStateType;