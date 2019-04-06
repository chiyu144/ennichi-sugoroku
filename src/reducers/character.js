const initialState = {
    ply: 1,
    npc: 3,
    character: [
        {
            index: 0,
            name: '線香',
            keyVisual:'',
            chessVisual:''
        }, {
            index: 1,
            name: '蜂',
            keyVisual:'',
            chessVisual:''
        }, {
            index: 2,
            name: '土星',
            keyVisual:'',
            chessVisual:''
        }, {
            index: 3,
            name: '錦冠菊',
            keyVisual:'',
            chessVisual:''
        }
    ]
}
  
const characterReducer = (state = initialState, action) => {
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

export default characterReducer;