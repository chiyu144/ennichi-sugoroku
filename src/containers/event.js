import { connect } from 'react-redux';
import * as actions from '../actions/character';

import Event from '../components/event';

const mapStateToProps = state => {
    return {
        isTurn: state.character.isTurn,
        plyList: state.character.plyList,
        cell: state.cell.cell,
        event: state.event.checked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
        updateTurn: (next) => dispatch(actions.updateTurn(next)),
        inOutJail: (inmate) => dispatch(actions.inOutJail(inmate))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Event)