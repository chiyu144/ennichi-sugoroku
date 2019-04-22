import shortid from 'shortid';

const initialState = {
    plyNum: 1,
    isTurn: 0,
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
            name: '',
            outcome: 0,
            offset: { curr:0, x: 0, y: 0 },
            inJail: false
        }, {
            index: 1,
            uid: shortid.generate(),
            type: 'npc',
            name: '',
            outcome: 0,
            offset: { curr:0, x: 0, y: 0 },
            inJail: false
        }, {
            index: 2,
            uid: shortid.generate(),
            type: 'npc',
            name: '',
            outcome: 0,
            offset: { curr:0, x: 0, y: 0 },
            inJail: false
        }, {
            index: 3,
            uid: shortid.generate(),
            type: 'npc',
            name: '',
            outcome: 0,
            offset: { curr:0, x: 0, y: 0 },
            inJail: false
        }
    ]
}
  
const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PLY_NUM':
            const person = action.payload.person;
            return {...state, plyNum: person}

        case 'SET_PLY_TYPE':
            const plyNum = action.payload.plyNum;
            const newState = JSON.parse(JSON.stringify(state));
            if(plyNum === 2) {
                newState.plyList[1].type = 'ply';
                return newState
            } else if (plyNum === 3 ) {
                newState.plyList[1].type = 'ply';
                newState.plyList[2].type = 'ply';
                return newState
            }  else if (plyNum === 4 ) {
                newState.plyList[1].type = 'ply';
                newState.plyList[2].type = 'ply';
                newState.plyList[3].type = 'ply';
                return newState
            } else { return newState }

        case 'SET_PLY_NAME':
            const plyNameArr = action.payload.plyNameArr;
            const updateName = [...state.plyList];
            plyNameArr.map((pn,i) => {
                if(i ===  updateName[i].index) {
                    return updateName[i].name = pn;
                }
            });
            return {...state, plyList: updateName};

        case 'DRAW_LOTS_ANIME':
            const newPlyArr = action.payload.newPlyArr;
            return {...state, plyList: newPlyArr}

        case 'UPDATE_OUTCOME':
            const who = action.payload.who;
            const newOutcome = action.payload.newOutcome;
            const updateOutcome = [...state.plyList];
            updateOutcome[who].outcome = newOutcome;
            return {...state, plyList: updateOutcome}
        
        case 'UPDATE_OFFSET':
            const which = action.payload.which;
            const newOffset = action.payload.newOffset;
            const updateOffset = [...state.plyList];
            updateOffset[which].offset = newOffset;
            return {...state, plyList: updateOffset};
        
        case 'UPDATE_TURN':
            let next = action.payload.next;
            if (next >= 4) { next = 0 }
            return {...state, isTurn: next};

        case 'IN_OUT_JAIL':
            const inmate = action.payload.inmate;
            const prison = [...state.plyList];
            prison[inmate].inJail = !prison[inmate].inJail;
            return {...state, plyList: prison}

        case 'RANKING':
            const plyListArr = action.payload.plyListArr;
            return {...state, plyList: plyListArr}

        default:
            return state;
    }
};

export default characterReducer;