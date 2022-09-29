import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import hookers from "./modules/hookers";
import users from "./modules/users";
import fleeks from "./modules/fleeks";
import notifications from "./modules/notifications";
import auth from "./modules/auth";
import circles from "./modules/circles";
import gallery from "./modules/gallery";
import settings from "./modules/settings";
import messages from "./modules/messages";
import hobby from "./modules/hobby";

const tempUsers = [
  {
    id: 1,
    username: "segun",
    connects: 50,
    dob: "03/05/1991",
    phone: "08012345678",
    description: "",
    avatar: "",
    sex: "male",
    looking_for: "men",
    location: "Sao Paulo",
    messages: [
      {
        id: 1,
        title: "Paullo Enterprises",
        content: "a good c",
        sender: "Admin",
      },
      {
        id: 1,
        title: "",
        content: "Hi",
        sender: "Susan",
      },
    ],
    friends: [
      {
        id: 1,
        username: "",
      },
      {
        id: 1,
        username: "",
      },
    ],
    notifications: [
      {
        id: 1,
        title: "Paullo Enterprises",
        content: "a good c",
        sender: "Admin",
      },
      {
        id: 1,
        title: "",
        content: "Hi",
        sender: "Susan",
      },
    ],
  },
];

const circleState = createPersistedState({
  paths: [ 'circles' ]
})

const store = createStore({
  
  modules: {
    hookers,
    users,
    fleeks,
    notifications,
    auth,
    circles,
    gallery,
    settings,
    messages,
    hobby
  },

 

  state: {
  
    notification: {
      show: false,
      type: "success",
      message: "",
    },
  },

  mutations: {
    notify: (state, { message, type }) => {
      state.notification.show = true;
      state.notification.type = type;
      state.notification.message = message;
      setTimeout(() => {
        state.notification.show = false;
      }, 3000);
    },
  },
  //plugins: [createPersistedState()]
});

export default store;
