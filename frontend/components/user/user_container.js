import { connect } from 'react-redux';

import User from './user';

const mapStateToProps = ({session, events}) => ({
  currentUser: session.currentUser
})

export default connect(mapStateToProps)(User);
