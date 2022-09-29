import axiosClient from "../../axios";


const settings = {
  namespaced: true,
    state: {
        setting: {
            data: {},
          },
    },

    actions: {
       
      deleteAccount({ commit }, reason) {
            return axiosClient.get('/delete-account').then((res) => {
              //commit("setSetting", res.data);
              console.log(res)
              return res;
            });
      },
    },

    mutations: {
        setSetting: (state, setting) => {
            state.setting.data = setting.data;
          },


    }

}

export default settings;