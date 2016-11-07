import { connect } from 'react-redux';

import User from './user';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

export default connect(mapStateToProps)(User);
