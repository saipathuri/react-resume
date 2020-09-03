import { connect } from 'react-redux';
import About from './About';

const mapStateToProps = state => {
  return {
    signedIn: state.SIGNED_IN
  }
}

export default connect(mapStateToProps)(About)