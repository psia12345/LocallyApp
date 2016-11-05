import React from 'react';
import { Provider } from 'react-redux';
import {getEvents } from '../actions/event_actions';
// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import EventListContainer from './event/event_list_container';
import EventFormContainer from './event/event_form_container';
import EventDetailContainer from './event_detail/event_detail_container';

const Root = ({store}) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoginUser = (nextState, ) => {
    if(store.getState().session.currentUser === null ){
      replace('/');
    }
  }
  const fetchAllEvents = () => {
    store.dispatch(getEvents())};

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}/>
          <Route path="/events" component={EventListContainer}
                 onEnter={fetchAllEvents}/>
               <Route path="/events/:id" component={EventDetailContainer}/>
          <Route path="/new_event" component={EventFormContainer} onEnter={_ensureLoginUser}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
