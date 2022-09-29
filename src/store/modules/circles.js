import axiosClient from "../../axios";


const circles = {
  namespaced: true,
  state: {
    circle: {
      data: {},
      loading: false,
    },
  },

  actions: {
    //get connected friends
    async getConnectedFriends({ commit }) {
      await axiosClient.get("/circle").then((res) => {
        //console.log(res.data);
        commit("setFriends", res.data);
        return res;
      });
    },

    //check previous friend request
    checkFriendRequest({ commit }, uid) {
      
      return axiosClient.get(`/check-friend/${uid}`)
             .then((res) => {
              console.log(res);
                 return res;
             })
    },

    //send connection request
    sendRequest({ commit, dispatch }, ruser) {
      return axiosClient.put('/connect', ruser).then((res) => {
        
        //dispatch("notifications/sendNotification", id);
        dispatch("getConnectedFriends");
        //dispatch("notifications/getNotifications");
        return res;
      });
    },


    //accept connection request
    acceptRequest({ commit, dispatch }, id) {
      return axiosClient.put(`/accept-connect/${id}`).then((res) => {
        console.log(res.data);
        //commit('setCurrentUser', res.data)
        //dispatch("updateAcceptNotification", id);
        dispatch("getConnectedFriends");
        //dispatch("notifications/getNotifications");
        return res;
      });
    },

    //reject connection request
    rejectRequest({ commit, dispatch }, id) {
      return axiosClient.delete(`/reject-connect/${id}`).then((res) => {
        //console.log(res.data)
        dispatch("getConnectedFriends");
        //dispatch("notifications/getNotifications");
        return res;
      });
    },

    //reject connection request
    deleteFriend({ commit, dispatch }, id) {
      return axiosClient.delete(`/delete-onnect/${id}`).then((res) => {
        //console.log(res.data)
        dispatch("getConnectedFriends");
        //dispatch("notifications/getNotifications");
        return res;
      });
    },

    //cancel connection request
    cancelFriendRequest({ commit, dispatch }, id) {
      return axiosClient.delete(`/cancel-connect/${id}`).then((res) => {
        //console.log(res.data)
        dispatch("getConnectedFriends");
        //dispatch("notifications/getNotifications");
        return res;
      });
    },
  },

  mutations: {
    setFriends: (state, friends) => {
      state.circle.data = friends;
    },
  },
  //plugins: [createPersistedState()]
};

export default circles;
