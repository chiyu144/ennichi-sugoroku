import { connect } from 'react-redux';

import Cell from '../components/cell';

const mapStateToProps = state => {
    return {
        cell: state.cell.cell,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // updateOffset: (which, newOffset) => dispatch(actions.updateOffset(which, newOffset)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Cell)