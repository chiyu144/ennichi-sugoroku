import { connect } from 'react-redux';
// import * as actions from '../actions/character';

import Ranking from '../components/ranking';

const mapStateToProps = state => {
    return {
        plyList: state.character.plyList, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // setPlyNum: (person) => dispatch(actions.setPlyNum(person)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)
