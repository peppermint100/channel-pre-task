export const SET_SEARCH_BAR_TEXT = "SET_SEARCH_BAR_TEXT" as const;

export const setSearchBarText = (payload: string) => ({
    type: SET_SEARCH_BAR_TEXT,
    payload
})

type setSearchBarTextType = ReturnType<typeof setSearchBarText>;

export type SearchBarTextActionsType = setSearchBarTextType;