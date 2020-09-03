import { connect } from 'react-redux';
import Education from './Education';

const getEducationItems = (educationItems) => {
  return educationItems;
}

const mapStateToProps = state => {
  return {
    signedIn: state.SIGNED_IN,
    items: getEducationItems(state.educationItems)
  }
}

export default connect(mapStateToProps)(Education)