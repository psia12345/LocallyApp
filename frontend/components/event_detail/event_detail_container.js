import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { getEvent } from '../../actions/event_actions';

const mapStateToProps = ( state, ownprops) => ({
  event: state.eventShow
});

const mapDispatchToProps = dispatch => ({
  getEvent: (id) => dispatch(getEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
