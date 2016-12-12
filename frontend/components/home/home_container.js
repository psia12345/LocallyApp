import Home from './home';
import {connect} from 'react-redux';
import {filterByCategory} from '../../actions/category_actions';

const mapStateToProps = (state) => ({
  events: state.events
})


const mapDispatchToProps = dispatch => ({
  filterByCategory: (id) => dispatch(filterByCategory(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
