import axiosClient from "../../axios";


const hobby = {
  namespaced: true,
    state: {
        hobby: {
            data: {},
          },
    },

    actions: {
       
        gethobby({ commit }) {
            return axiosClient.get('/hobby').then((res) => {
              commit("setHobby", res.data);
              console.log(res)
              return res;
            });
      },
    },

    mutations: {
        setHobby: (state, hobby) => {
            state.hobby.data = hobby.data;
          },


    }

}

export default hobby;