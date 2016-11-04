import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import Modal from 'react-modal';
import {signup, login, logout, show } from './util/session_api_util';
import configStore from './store/store';
import merge from 'lodash/merge';
import {getEvents} from './actions/event_actions';

document.addEventListener("DOMContentLoaded", ()=>{
  Modal.setAppElement(document.body);
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
    store = configStore(preloadedState);
  } else {
    store = configStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);


  window.merge = merge;
  window.getEvents = getEvents;
  // window.login = login;
  // window.logout = logout;
  // window.show = show;
  // window.signup = signup;
  window.store = store;
})
