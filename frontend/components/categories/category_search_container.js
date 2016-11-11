import CategorySearch from './category_search';
import {connect } from 'react-redux';

const mapStateToProps = ({events}) => ({
  events: events
})

export default connect(mapStateToProps)(CategorySearch);
