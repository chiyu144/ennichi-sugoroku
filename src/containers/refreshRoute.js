import { connect } from "react-redux";

import RefreshRoute from '../components/refreshRoute';

const mapStateToProps = state => {
    return {
       spin: state.character.spin
    }
};
  
export default connect(mapStateToProps)(RefreshRoute);  