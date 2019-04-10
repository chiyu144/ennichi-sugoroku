const initialState = {
    chess: [
        {
            index: 0,
            offset: '',
            chessVisual:''
        }, {
            index: 1,
            offset: '',
            chessVisual:''
        }, {
            index: 2,
            offset: '',
            chessVisual:''
        }, {
            index: 3,
            offset: '',
            chessVisual:''
        }
    ]
}
  
const chessReducer = (state = initialState, action) => {
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

export default chessReducer;