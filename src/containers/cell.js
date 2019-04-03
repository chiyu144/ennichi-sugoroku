import { connect } from 'react-redux';
import * as actions from '../actions/cell';

import Cell from '../components/Cell';

const mapStateToProps = state => {
    return {
        cell: state.cell,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCell: (cell) => dispatch(actions.addCell(cell)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Cell)