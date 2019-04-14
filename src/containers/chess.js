import { connect } from 'react-redux';

import Chess from '../components/chess';

const mapStateToProps = state => {
    return {
        plyList: state.character.plyList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // Some Action
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Chess)