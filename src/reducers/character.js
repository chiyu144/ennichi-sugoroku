import shortid from 'shortid';

const initialState = {
    plyNum: 1,
    character: [
        {
            name: '線香'
        }, {
            name: '蜂'
        }, {
            name: '柳'
        }, {
            name: '土星'
        }, {
            name: '錦冠菊'
        }, {
            name: '銀冠菊'
        }
    ],
    plyList: [
        {
            index: 0,
            uid: shortid.generate(),
            type: 'ply',
            name: ''
        }, {
            index: 1,
            uid: shortid.generate(),
            type: 'npc',
            name: ''
        }, {
            index: 2,
            uid: shortid.generate(),
            type: 'npc',
            name: ''
        }, {
            index: 3,
            uid: shortid.generate(),
            type: 'npc',
            name: ''
        }
    ]
}
  
const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PLY_TYPE':
            const plyNum = action.payload.plyNum;
            if(plyNum === 2) {
                state.plyList[1].type = 'ply';
                return state
            } else if (plyNum === 3 ) {
                state.plyList[1].type = 'ply';
                state.plyList[2].type = 'ply';
                return state
            }  else if (plyNum === 4 ) {
                state.plyList[1].type = 'ply';
                state.plyList[2].type = 'ply';
                state.plyList[3].type = 'ply';
                return state
            } else { return state }
        case 'SET_PLY_NAME':
            const plyNameArr = action.payload.plyNameArr;
            const newS1 = Object.assign({}, state);
            plyNameArr.map((pn,i) => {
                if(i ===  newS1.plyList[i].index) {
                    return newS1.plyList[i].name = pn;
                }
            });
            return newS1;
        case 'DRAW_LOTS_ANIME':
            const newPlyArr = action.payload.newPlyArr;
            const newS2 = Object.assign({}, state);
            newS2.plyList = newPlyArr;
            return newS2;
        default:
            return state;
    }
};

export default characterReducer;