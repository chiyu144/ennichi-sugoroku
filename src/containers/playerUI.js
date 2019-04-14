import { connect } from 'react-redux';
import * as actions from '../actions/character';

import PlayerUI from '../components/playerUI';

const mapStateToProps = state => {
    return {
        // Some State
        plyList: state.character.plyList,
        cell: state.cell.cell
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // Some Action
        updateOutcome: (who, newOutcome) => dispatch(actions.updateOutcome(who, newOutcome)),
        updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
        updateTurn: (next) => dispatch(actions.updateTurn(next))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(PlayerUI)