const initialState = {
    checked: false,
    rankList: []
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CLOSE_EVENT':
            const toggle = action.payload.toggle;
            return {...state, checked: toggle};

        case 'RANKING':
            const plyListArr = action.payload.plyListArr;
            return {...state, rankList: plyListArr}

        case 'RESET_RANK':
            return state = {...initialState};
            
        default:
            return state;
    }
};

export default eventReducer;