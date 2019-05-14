import { connect } from 'react-redux';
import * as eventActions from '../actions/event';

import Ranking from '../components/ranking';

const mapStateToProps = state => {
    return {
        rankList: state.event.rankList, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetRank: () => dispatch(eventActions.resetRank())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)
