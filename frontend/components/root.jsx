import React from 'react';
import { Provider } from 'react-redux';
import {getEvents } from '../actions/event_actions';
// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import EventListContainer from './event/event_list_container';


const Root = ({store}) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };
  const fetchAllEvents = () => {
    store.dispatch(getEvents())};

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/events" component={EventListContainer} onEnter={fetchAllEvents} />
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
