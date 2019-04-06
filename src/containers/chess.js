import { connect } from 'react-redux';
import * as actions from '../actions/chess';

import Chess from '../components/chess';

const mapStateToProps = state => {
    return {
        chess: state.chess,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addChess: (chess) => dispatch(actions.addChess(chess)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Chess)