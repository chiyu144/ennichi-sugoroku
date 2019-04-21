import { connect } from 'react-redux';
import * as actions from '../actions/character';

import Intro from '../components/intro';

const mapStateToProps = state => {
    return {
        plyNum: state.character.plyNum
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlyNum: (person) => dispatch(actions.setPlyNum(person)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
