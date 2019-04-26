import { connect } from 'react-redux';
import * as actions from '../actions/character';
import * as eventActions from '../actions/event';

import Event from '../components/event';

const mapStateToProps = state => {
    return {
        isTurn: state.character.isTurn,
        plyList: state.character.plyList,
        cell: state.cell.cell,
        checked: state.event.checked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
        updateTurn: (next) => dispatch(actions.updateTurn(next)),
        inOutJail: (inmate) => dispatch(actions.inOutJail(inmate)),
        openCloseEvent: (toggle) => dispatch(eventActions.openCloseEvent(toggle)),
        ranking: (plyListArr) => dispatch(actions.ranking(plyListArr))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Event)