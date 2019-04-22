import { connect } from 'react-redux';
import * as actions from '../actions/character';
import * as eventActions from '../actions/event';

import Game from '../components/game';

const mapStateToProps = state => {
    return {
        plyList: state.character.plyList,
        isTurn: state.character.isTurn,
        checked: state.event.checked,
        cell: state.cell.cell
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
        openCloseEvent: (toggle) => openCloseEvent(eventActions.openCloseEvent(toggle))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Game)