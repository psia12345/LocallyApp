import CategorySearch from './category_search';
import {connect } from 'react-redux';

const mapStateToProps = ({events}, ownProps) => {
  return({
    events: events,
    catgory: ownProps.params.name
  })
}

export default connect(mapStateToProps)(CategorySearch);
