import { connect } from 'react-redux';
import Experience from './Experience';

const mapStateToProps = state => {
  return {
    signedIn: state.SIGNED_IN
  }
}

export default connect(mapStateToProps)(Experience)