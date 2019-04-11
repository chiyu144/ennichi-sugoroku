import { connect } from 'react-redux';
import * as actions from '../actions/game';

import Game from '../components/game';

const mapStateToProps = state => {
    return {
        plyList: state.character.plyList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // drawLotsAnime: (game) => dispatch(actions.drawLotsAnime(game)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Game)