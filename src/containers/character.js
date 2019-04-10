import { connect } from 'react-redux';
import * as actions from '../actions/character';

import Character from '../components/character';

const mapStateToProps = state => {
    return {
        plyNum: state.character.plyNum,
        character: state.character.character,
        plyList: state.character.plyList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlyType: (plyNum) => dispatch(actions.setPlyType(plyNum)),
        setPlyName: (plyNameArr) => dispatch(actions.setPlyName(plyNameArr)),    
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Character)