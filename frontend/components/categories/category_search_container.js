import CategorySearch from './category_search';
import {connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.params.name;
  return({
    events: state.events,
    catgory: name
  })
}

export default connect(mapStateToProps)(CategorySearch);
