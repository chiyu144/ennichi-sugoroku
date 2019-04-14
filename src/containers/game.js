import { connect } from 'react-redux';
import * as actions from '../actions/character';

import Game from '../components/game';

const mapStateToProps = state => {
    return {
        plyList: state.character.plyList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Game)