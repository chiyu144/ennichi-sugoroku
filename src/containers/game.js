import { connect } from 'react-redux';
import * as actions from '../actions/character';
import * as eventActions from '../actions/event';
import * as cellActions from '../actions/cell';

import Game from '../components/game';

const mapStateToProps = state => {
    return {
        plyList: state.character.plyList,
        isTurn: state.character.isTurn,
        checked: state.event.checked,
        cell: state.cell.cell,
        bodyWidth: state.cell.bodyWidth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
        openCloseEvent: (toggle) => dispatch(eventActions.openCloseEvent(toggle)),
        updateBodyWidth: (newBodyWidth) => dispatch(cellActions.updateBodyWidth(newBodyWidth)),
        resetGame: () => dispatch(actions.resetGame())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Game)