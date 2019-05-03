import shortid from 'shortid';

const initialState = {
    plyNum: 1,
    isSelecting: 0,
    isTurn: 0,
    spin: false,
    sides: [
        "translateZ(-100px) rotateY(0deg)",
        "translateZ(-100px) rotateX(-180deg)",
        "translateZ(-100px) rotateY(-90deg)",
        "translateZ(-100px) rotateY(90deg)",
        "translateZ(-100px) rotateX(-90deg)",
        "translateZ(-100px) rotateX(90deg)"
    ],
    character: [
        {
            index: 0,
            name: '土星',
            chessVisual:null,
            icon:require('../img/icon04.png'),
            visual: require('../img/chara04.png')
        }, {
            index: 1,
            name: '錦冠菊',
            chessVisual:null,
            icon:require('../img/icon05.png'),
            visual: require('../img/chara05.png')
        }, {
            index: 2,
            name: '蜂',
            chessVisual:null,
            icon:require('../img/icon02.png'),
            visual: require('../img/chara02.png')
        }, {
            index: 3,
            name: '線香',
            chessVisual:null,
            icon:require('../img/icon01.png'),
            visual: require('../img/chara01.png')
        }, {
            index: 4,
            name: '柳',
            chessVisual:null,
            icon:require('../img/icon03.png'),
            visual: require('../img/chara03.png')
            
        }, {
            index: 5,
            name: '銀冠菊',
            chessVisual:null,
            icon:require('../img/icon06.png'),
            visual: require('../img/chara06.png')
        }
    ],
    plyList: [
        {
            index: 0,
            uid: shortid.generate(),
            type: 'ply',
            name: null,
            visual: null,
            icon: null,
            chessVisual:null,
            outcome: 0,
            offset: { curr:0, x: 0, y: 0 },
            inJail: false
        }, {
            index: 1,
            uid: shortid.generate(),
            type: 'npc',
            name: null,
            visual: null,
            icon: null,
            chessVisual:null,
            outcome: 0,
            offset: { curr:0, x: 0, y: 0 },
            inJail: false
        }, {
            index: 2,
            uid: shortid.generate(),
            type: 'npc',
            name: null,
            visual: null,
            icon: null,
            chessVisual:null,
            outcome: 0,
            offset: { curr:0, x: 0, y: 0 },
            inJail: false
        }, {
            index: 3,
            uid: shortid.generate(),
            type: 'npc',
            name: null,
            visual: null,
            icon: null,
            chessVisual:null,
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

        case 'SET_PLY_INFO':
            const selectedIndex = action.payload.selectedIndex;
            const plyIndex = action.payload.plyIndex;
            const selected = [...state.character][selectedIndex];
            const setUp = [...state.plyList];

            setUp[plyIndex].name = selected.name;
            setUp[plyIndex].visual = selected.visual;
            setUp[plyIndex].chessVisual = selected.chessVisual;
            setUp[plyIndex].icon = selected.icon;

            return {...state, plyList: setUp};

        case 'UPDATE_IS_SELECTING':
            const selectingIndex = action.payload.selectingIndex;
            return {...state, isSelecting: selectingIndex}

        case 'DRAW_LOTS_ANIME':
            const newPlyArr = action.payload.newPlyArr;
            return {...state, plyList: newPlyArr, spin: true }

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