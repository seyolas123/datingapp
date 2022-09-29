import axiosClient from "../../axios";

const users = {
  namespaced: true,
  state: {
    user: {
      data: {},
      //token: sessionStorage.getItem("TOKEN"),
    },

    history: {
        purchase: {}
    },

    usersbylocation: {
      loading: false,
      data: [],
    },

    users: {
      loading: false,
      data: [],
      location: [],
    },

    area: {
      data: []
    },

    getCurrentUser: {
      data: {},
      loading: false,
    },

    currentUser: {
      data: [],
      loading: false,
    },

    match: {
      data: [],
      loading: false
    }
  },

  actions: {
    //get single user
    getUser({ commit }) {
      return axiosClient.get("/user").then((res) => {
        //console.log(res.data);
        commit("setUser", res.data);
      });
    },

    //get purchase history
    getPurchaseHistory({ commit }) {
      return axiosClient.get("/purchase-history").then((res) => {
        console.log(res.data);
        commit("setPurchase", res.data);
      });
    },

    //save purchase
    savePurchase({ commit }, amount) {
      return axiosClient.get(`save-purchase/${amount}`).then((res) => {
        //console.log(res.data);
        //commit("setPurchase", res.data);
      });
    },

    //get single user
    getUserForProfile({ commit }) {
      return axiosClient.get("/profile").then((res) => {
        //console.log(res.data);
        commit("setProfileUser", res.data);
      });
    },

    //get all users
    getAllUsers({ commit }) {
      return axiosClient.get("/users").then((res) => {
        // console.log(res);
        commit("setUsers", res.data);
        return res;
      });
    },

    getUserArea({ commit, dispatch }, id) {
      return axiosClient.get(`/user/area/${id}`).then((res) => {
        commit("setArea", res.data);
        return res;
      });
    },

    getArea({ commit, dispatch }) {
      return axiosClient.get('area').then((res) => {
        commit("setArea", res.data);
        console.log(res.data)
        return res;
      });
    },
    
    
    searchUser({ commit }, query ){
      return axiosClient.get('/search-user', query)
      .then((res) => {
        //commit("setUsers", res.data);
        //console.log(res.data)
        return res;
      })
    },

    getUserMatch({ commit }) {
      return axiosClient.get('/match').then((res) => {
        console.log(res.data.match)
        commit("setMatch", res.data);
        return res;
      });
    },

    updateConnect({ commit, dispatch }, connect) {
      return axiosClient.put(`/user/buy/connect/${connect}`).then((res) => {
        //dispatch("savePurchase", connect)
        return res;
      });
    },

    getUserByUid({ commit }, id) {
      commit("setCurrentUserLoading", true);
      return axiosClient
        .get(`/user/${id}`)
        .then((res) => {
          commit("setCurrentUserLoading", false);
          commit("setCurrentUser", res.data);
          //console.log(res.data);

          return res;
        })
        .catch((err) => {
          commit("setCurrentUserLoading", false);
          throw err;
        });
    },

    getUserById({ commit }, id) {
      commit("setCurrentUserLoading", true);
      return axiosClient
        .get(`/user-by-id/${id}`)
        .then((res) => {
          commit("setCurrentUserLoading", false);
          commit("setCurrentUser", res.data);
          //console.log(res.data);

          return res;
        })
        .catch((err) => {
          commit("setCurrentUserLoading", false);
          throw err;
        });
    },

    getUsersByLocation({ commit }, locations) {
      commit("setUserLocationLoading", true);
      //console.log(locations);
      return axiosClient.post("/area/location", locations).then((res) => {
        commit("setUserLocationLoading", false);
        commit("setUserLocations", res);
        //console.log(res);
        return res;
      });
    },

    //update user
    updateBasicProfile({ commit }, user) {
      return axiosClient.put("/user/update/profile", user).then((res) => {
        commit("setCurrentUser", res.data);
        return res;
      });
    },

    //update user
    updateProfilePicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient
        .put("/user/update/profile/picture", user)
        .then((res) => {
          commit("setCurrentUser", res.data);
          return res;
        });
    },

     //update first gallery picture
     updateFirstPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient
        .put("/first-picture", user)
        .then((res) => {
          //commit("setCurrentUser", res.data);
          return res;
        });
    },

     //update second gallery picture
     updateSecondPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient
        .put("/second-picture", user)
        .then((res) => {
          //commit("setCurrentUser", res.data);
          return res;
        });
    },

     //update third gallery picture
     updateThirdPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient
        .put("/third-picture", user)
        .then((res) => {
          //commit("setCurrentUser", res.data);
          return res;
        });
    },


     //update fourth gallery picture
     updateFourthPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient
        .put("/fourth-picture", user)
        .then((res) => {
          //commit("setCurrentUser", res.data);
          return res;
        });
    },

     //update fifth gallery picture
     updateFifthPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient
        .put("/fifth-picture", user)
        .then((res) => {
          //commit("setCurrentUser", res.data);
          return res;
        });
    },



  },

  mutations: {
    setUser: (state, user) => {
      state.user.data = user;
    },
    setUserLocations: (state, users) => {
      state.usersbylocation.data = users.data;
    },

    setCurrentUser: (state, user) => {
      state.currentUser.data = user;
    },

    setUserLocationLoading: (state, val) => {
      state.usersbylocation.loading = val;
    },

    setCurrentUserLoading: (state, loading) => {
      state.currentUser.loading = loading;
    },

    setProfileUser: (state, user) => {
      state.user.data = user;
    },

    setUsers: (state, users) => {
      state.users.data = users;
    },

    setArea: (state, area) => {
      state.area.data = area;
    },

    
    setPurchase: (state, data) => {
      state.history.purchase = data;
    },

    setMatch: (state, matches) => {
      state.match.data = matches.match;
    }
  },
};

export default users;
