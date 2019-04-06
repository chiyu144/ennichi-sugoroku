import { connect } from 'react-redux';
import * as actions from '../actions/character';

import Character from '../components/character';

const mapStateToProps = state => {
    return {
        ply: state.character.ply,
        npc: state.character.npc,        
        character: state.character.character,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCharacter: (character) => dispatch(actions.addCharacter(character)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Character)