const initialState = {
    cell: [
        {
            index: 0,
            event: null
        },
        {
            index: 1,
            event: 'stay'
        },
        {
            index: 2,
            event: null
        },
        {
            index: 3,
            event: 'foward'
        },
        {
            index: 4,
            event: null
        },
        {
            index: 5,
            event: 'back'
        },
        {
            index: 6,
            event: null
        },
        {
            index: 7,
            event: 'stay'
        },
        {
            index: 8,
            event: 'foward'
        },
        {
            index: 9,
            event: null
        },
        {
            index: 10,
            event: null
        },
        {
            index: 11,
            event: 'back'
        },
        {
            index: 12,
            event: 'goal'
        }
        // ,{ index: 13 },{ index: 14 },
        // { index: 15 },{ index: 16 },{ index: 17 },
        // { index: 18 },{ index: 19 },{ index: 20 },
        // { index: 21 },{ index: 22 },{ index: 23 },
        // { index: 24 },{ index: 25 },{ index: 26 },
        // { index: 27 },{ index: 28 },{ index: 29 },
        // { index: 30 },{ index: 31 },{ index: 32 },
        // { index: 33 },{ index: 34 },{ index: 35 },
        // { index: 36 },{ index: 37 },{ index: 38 },
        // { index: 39 },{ index: 40 },{ index: 41 },
        // { index: 42 },{ index: 43 },{ index: 44 },
        // { index: 45 },{ index: 46 },{ index: 47 },
        // { index: 48 },{ index: 49 },{ index: 50 },
        // { index: 51 },{ index: 52 },{ index: 53 },
        // { index: 54 },{ index: 55 },{ index: 56 },
        // { index: 57 },{ index: 58 },{ index: 59 },
        // { index: 60 }
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