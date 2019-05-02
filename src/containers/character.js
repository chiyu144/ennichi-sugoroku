import { connect } from 'react-redux';
import * as actions from '../actions/character';

import Character from '../components/character';

const mapStateToProps = state => {
    return {
        plyNum: state.character.plyNum,
        isSelecting: state.character.isSelecting,
        character: state.character.character,
        plyList: state.character.plyList,
        spin: state.character.spin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlyType: (plyNum) => dispatch(actions.setPlyType(plyNum)), 
        setPlyInfo: (selectedIndex, plyIndex) => dispatch(actions.setPlyInfo(selectedIndex, plyIndex)), 
        drawLotsAnime: (newPlyArr) => dispatch(actions.drawLotsAnime(newPlyArr)),
        updateIsSelecting: (selectingIndex) => dispatch(actions.updateIsSelecting(selectingIndex)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Character)