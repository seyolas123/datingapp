import axiosClient from "../../axios";

const hookers = {
  namespaced: true,
  state: {
    history: {
      data: [],
    },
  },

  actions: {
    //get hookup history
    getHistory({ commit }) {
      return axiosClient.get("/hook/history").then((res) => {
        console.log(res.data);
        commit("setHistoryData", res.data);
        return res;
      });
    },

    //get hookup status
    getHookStatus({ commit }) {
      return axiosClient.get("/user/hook/status").then((res) => {
        console.log(res.data);
        commit("setHistoryData", res.data);
        return res;
      });
    },

    //send hook request
    sendHookRequest({ commit }, ruser) {
      //console.log(name);
      return axiosClient.post('/hook', ruser)
             .then((res) => {
                 return res;
             })
    },

     //check hook request
     checkHookRequest({ commit }, uid) {
      //console.log(name);
      return axiosClient.get(`/check-hook/${uid}`)
             .then((res) => {
                 return res;
             })
    },

    //complete hook request
    completeHook({ commit }, useruids) {
      //console.log(name);
      return axiosClient.put('/hook', useruids)
             .then((res) => {
                 return res;
             })
    }
  
  },

  mutations: {
    setHistoryData: (state, payload) => {
      state.history.data = payload;
    },
  },
};

export default hookers;
