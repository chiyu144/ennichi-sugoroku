const initialState = {
    spin: false,
}
  
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'DRAW_LOTS_ANIME':
        // console.log('gameReducer', state);
        //     const newPlyArr = action.payload.newPlyArr;
        //     Object.assign(state.character.plyList, {
        //         newPlyArr
        //     });
        //     return state;
        default:
            return state;
    }
};

export default gameReducer;