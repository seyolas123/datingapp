import axiosClient from "../../axios";

const notifications = {
  namespaced: true,
  state: {
    userNotification: {
      data: [],
    },

    userFullNotificationGeneral: {
      data: [],
    },

    userFullNotification: {
      data: [],
    },

    readStatus: {
      data: [],
    }
  },

  actions: {
    //get short notifications
    getNotifications({ commit }) {
      return axiosClient.get("/notifi").then((res) => {
        //console.log(res.data);
        commit("setNotification", res.data);
        return res;
      });
    },

    //get read status for notifications
    getReadStatus({ commit }) {
      return axiosClient.get("/status").then((res) => {
        commit("setReadStatus", res.data);
        return res;
      });
    },

    //read status
    markRead({ commit, dispatch }) {
      return axiosClient.put("/read").then((res) => {
        dispatch("getReadStatus");
        return res;
      });
    },

     //unread status
     markUnRead({ commit, dispatch }) {
      return axiosClient.put("/unread").then((res) => {
        dispatch("getReadStatus");
        return res;
      });
    },

     //send notification
     inviteToChat({ commit, dispatch }, uid) {
      return axiosClient.get(`/invite-chat/${uid}`).then((res) => {
        dispatch("markUnRead");
        return res;
      });
    },

     //send notification
     notifyFleekUpload({ commit, dispatch }) {
      return axiosClient.get('/notify-fleek').then((res) => {
        dispatch("markUnRead");
        return res;
      });
    },

    //send notification
    notifyHookRequest({ commit, dispatch }, uid) {
      return axiosClient.get(`/notify-hook/${uid}`).then((res) => {
        dispatch("markUnRead");
        return res;
      });
    },

    //send notification
     notifyFriendRequest({ commit, dispatch }, uid) {
      return axiosClient.get(`/notify-friend/${uid}`).then((res) => {
        dispatch("markUnRead");
        return res;
      });
    },

    //send notification
    notifyAcceptanceRequest({ commit, dispatch }, uid) {
      return axiosClient.get(`/notify-accept/${uid}`).then((res) => {
        dispatch("markUnRead");
        return res;
      });
    },

    
    //send notification
    notifyRejectionRequest({ commit, dispatch }, uid) {
      return axiosClient.get(`/notify-reject/${uid}`).then((res) => {
        dispatch("markUnRead");
        return res;
      });
    },

    
    //send notification
    notifyDeletionRequest({ commit, dispatch }, uid) {
      return axiosClient.get(`/notify-delete/${uid}`).then((res) => {
        dispatch("markUnRead");
        return res;
      });
    },

    //get full notifications
    getFullNotifications({ commit, dispatch }) {
      return axiosClient.get("/notifications").then((res) => {
        
        commit("setFullNotification", res.data);
        return res;
      });
    },

    //get full notifications general
    getGeneralNotifications({ commit, dispatch }) {
      return axiosClient.get("/notifications-general").then((res) => {
        
        commit("setFullNotificationGeneral", res.data);
        return res;
      });
    },

    //send connection notification request
    sendNotification({ dispatch }, id) {
      return axiosClient.put(`/user/notify/${id}`).then((res) => {
        dispatch("getNotifications");
        return res;
      });
    },

    updateAcceptNotification({ commit }, id) {
      return axiosClient.put(`/user/notify/update/accept/${id}`).then((res) => {
        dispatch("getNotifications");
        return res;
      });
    },

    deleteRequestNotification({ commit, dispatch }, id) {
      return axiosClient.put(`/user/notify/delete/${id}`).then((res) => {
        dispatch("getNotifications");
        return res;
      });
    },
  },

  mutations: {
    setNotification: (state, notification) => {
      state.userNotification.data = notification;
    },

    setFullNotification: (state, notification) => {
      state.userFullNotification.data = notification;
    },

    setFullNotificationGeneral: (state, notification) => {
      state.userFullNotificationGeneral.data = notification;
    },

    setReadStatus: (state, status) => {
      state.readStatus.data = status;
    },
  },
};

export default notifications;
