const initialState = {
    cell: [
        { index: 0 },{ index: 1 },{ index: 2 },
        { index: 3 },{ index: 4 },{ index: 5 },
        { index: 6 },{ index: 7 },{ index: 8 },
        { index: 9 },{ index: 10 },{ index: 11 },
        { index: 12 },{ index: 13 },{ index: 14 },
        { index: 15 },{ index: 16 },{ index: 17 },
        { index: 18 },{ index: 19 },{ index: 20 },
        { index: 21 },{ index: 22 },{ index: 23 },
        { index: 24 },{ index: 25 },{ index: 26 },
        { index: 27 },{ index: 28 },{ index: 29 },
        { index: 30 },{ index: 31 },{ index: 32 },
        { index: 33 },{ index: 34 },{ index: 35 },
        { index: 36 },{ index: 37 },{ index: 38 },
        { index: 39 },{ index: 40 },{ index: 41 },
        { index: 42 },{ index: 43 },{ index: 44 },
        { index: 45 },{ index: 46 },{ index: 47 },
        { index: 48 },{ index: 49 },{ index: 50 },
        { index: 51 },{ index: 52 },{ index: 53 },
        { index: 54 },{ index: 55 },{ index: 56 },
        { index: 57 },{ index: 58 },{ index: 59 },
        { index: 60 },{ index: 61 }
    ]
}
  
const cellReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_CELL':
        //     新しく追加するTODO
        //     const cell = action.payload.cell;
        //     stateを複製して追加
        //     const newState = Object.assign({}, state);
        //     newState.cell.push(cell);
        //     return newState;
        default:
            return state;
    }
};

export default cellReducer;