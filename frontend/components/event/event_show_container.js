import EventShow from './event_show';
import {connect} from 'react-redux';
import {getEvent} from '../../actions/event_actions';

const mapStateToProps = (state, ownprops) => ({
  event: state.events[ownprops.params.id - 1]
});

const mapDispatchToProps = dispatch => ({
  getEvent: (id) => dispatch(getEvent(id))
});

export default connect(mapStateToProps)(EventShow);
