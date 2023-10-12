export const languageReducer = (state = { language: 'English' }, action) => {
    switch (action.type) {
        case 'UPDATE_APP_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};
