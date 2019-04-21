const initialState = {
    checked: false,
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CLOSE_EVENT':
            const toggle = action.payload.toggle;
            return {...state, checked: toggle};
            
        default:
            return state;
    }
};

export default eventReducer;