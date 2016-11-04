//mapStateToProps and mapDispatchToProps
import EventList from './event_list';
import EventIndexItem from './event_index_item';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps)(EventList)
// don't need to mapDispatchToProps since the action will be dispatch onEnter at Root
