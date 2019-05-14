import { connect } from 'react-redux';
import * as actions from '../actions/character';
import * as eventActions from '../actions/event';

import PlayerUI from '../components/playerUI';

const mapStateToProps = state => {
    return {
        isTurn: state.character.isTurn,
        plyList: state.character.plyList,
        cell: state.cell.cell,
        sides: state.character.sides
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateOutcome: (who, newOutcome) => dispatch(actions.updateOutcome(who, newOutcome)),
        updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
        updateTurn: (next) => dispatch(actions.updateTurn(next)),
        inOutJail: (inmate) => dispatch(actions.inOutJail(inmate)),
        openCloseEvent: (toggle) => dispatch(eventActions.openCloseEvent(toggle))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(PlayerUI)