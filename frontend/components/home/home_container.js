import Home from './home';
import {connect} from 'react-redux';
import {filterByCategory} from '../../actions/category_actions';


const mapDispatchToProps = dispatch => ({
  filterByCategory: (id) => dispatch(filterByCategory(id))
})

export default connect(null, mapDispatchToProps)(Home);
