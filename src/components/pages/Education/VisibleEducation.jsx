import { connect } from 'react-redux';
import Education from './Education';

const getEducationItems = (educationItems) => {
  return educationItems;
}

const mapStateToProps = state => {
  return {
    items: getEducationItems(state.educationItems)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default VisibleEducation = connect(mapStateToProps, mapDispatchToProps)(Education)