import React from 'react';
import { Provider } from 'react-redux';
import {getEvents, getEvent } from '../actions/event_actions';
import {fetchUser} from '../actions/session_actions';
// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import EventListContainer from './event/event_list_container';
import EventFormContainer from './event/event_form_container';
import EventDetailContainer from './event_detail/event_detail_container';
import HomeContainer from './home/home_container';
import UserContainer from './user/user_container';
import EventRegistrationFormContainer from './event_registration/event_registration_container';
import RegistrationSuccessContainer from './registration_success/registration_success_container';
import CategoryContainer from './categories/category_search_container';

const Root = ({store}) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoginUser = (nextState, replace ) => {
    if(store.getState().session.currentUser === null ){
      replace('/');
    }
  }
  const fetchAllEvents = () => {
    store.dispatch(getEvents());
  };

  const fetchEvent = (nextState) =>{
    store.dispatch(getEvent(nextState.params.id));
  }
  const getUser = (nextState) => {
    store.dispatch(fetchUser(nextState.params.id));
  }
  // const checkUserId = (nextState, ) => {
  //   if(store.getState().eventShow.host_id === currentUser.id){
  //     replace(`/events/${eventShow.id}`);
  //   }
  // }

  // const filloutEventInfo = () => {
  //   const event = store.getState().eventShow;
  //     title: event.title,
  //     description: event.description,
  //     host_id: this.props.currentUser.id,
  //     categories: event.categories
  //   })
  // }
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={HomeContainer}/>
          <Route path="/login" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}/>
          <Route path="/events" component={EventListContainer}
                 onEnter={fetchAllEvents}/>
          <Route path="/events/:id" component={EventDetailContainer}/>
          <Route path="/events/:id/register" component={EventRegistrationFormContainer} onEnter={fetchEvent}/>
          <Route path="/events/:id/confirmation"
            component={RegistrationSuccessContainer}
            onEnter={fetchEvent} />
          <Route path="/new_event" component={EventFormContainer} onEnter={_ensureLoginUser}/>
          <Route path="/events/:id/update" component={EventFormContainer} onEnter={fetchEvent}/>
          <Route path="/users/:id" component={UserContainer} onEnter={getUser} />
          <Route path="/categories/:id" component={CategoryContainer}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
