import { connect } from 'react-redux';
import Login from './Login';
import { signIn, signOut } from '../../store/auth/actions';

const mapStateToProps = state => {
  return {
    signedIn: state.SIGNED_IN
  }
}

export default connect(mapStateToProps, { signIn, signOut })(Login)