import axiosClient from "../../axios";

const auth = {
  namespaced: true,
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
  },

  actions: {
    //login a user
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
      });
    },

    register({ commit, dispatch }, user) {
      delete user.avatar_url;
      return axiosClient.post("/register", user).then((data) => {
       // dispatch("sendVerificationEmail", user);
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
      });
    },

    sendVerificationEmail({ commit }, user) {
        return axiosClient.get('email/resend')
              .then((res) => {
                return res;
              })
    },

    getVerified({ commit }, { id, hash }) {
      //console.log(id);
      //console.log(hash);
      return axiosClient.get(`email/verify/${id}/${hash}`)
          .then((res) => {
            return res;
           })
    },

    //logout a user
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },

    //forgot password
    forgotPassword({ commit }, email){
      //console.log(email)
      return axiosClient.post("/password/email", email)
            .then((res) => {
              return res;
            })
    },

    //submit code for check
    submitCode({ commit }, code){
      
      return axiosClient.post("/password/code/check", code)
            .then((res) => {
              return res;
            })
    },

    //submit code for check
    resetPassword({ commit }, user){
      
      return axiosClient.post("/password/reset", user)
            .then((res) => {
              return res;
            })
    }
  },

  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, user) => {
      state.user.data = user;
    },

    setToken: (state, token) => {
      state.user.token = token;
      sessionStorage.setItem("TOKEN", token);
    },
  },
};

export default auth;
