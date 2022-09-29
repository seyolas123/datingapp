import axios from "axios";
import axiosClient from "../../axios";


const fleeks = {
  namespaced: true,
    state: {
        fleek: {
            data: {},
          },
          userFleek : {
            data: {}
          }
    },

    actions: {
      // getAllFleeks({ commit }) {
        
      //   return axiosClient.get('/fleeks').then((res) => {
      //     commit("setFleek", res);
      //     console.log(res);
      //     return res;
      //   });
      // },

      getAllFleeks({ commit }) {
        
        return axiosClient.get('/fleeks').then((res) => {
          commit("setFleek", res.data);
          console.log(res.data);
          return res;
        });
      },

      searchFleeks({ commit }, query ){
        return axiosClient.get('/search-fleek', query)
        .then((res) => {
          //commit("setUsers", res.data);
          //console.log(res.data)
          return res;
        })
      },
  

      postFleek({ commit, dispatch }, userData) {
        delete userData.video_url;
        return axiosClient.post('/user/fleek', userData)
               .then((res) => {
                dispatch("getAllFleeks")
                  return res;
               })
      },

      getUserFleek({ commit }, uid) {
        return axiosClient.get(`user/fleeks/${uid}`)
                .then((res) => {
                  commit("setUserFleek", res.data);
                  console.log(res.data);
                  return res;
                })
      }

    },

    mutations: {
        setFleek: (state, fleek) => {
            state.fleek.data = fleek;
          },

          setUserFleek: (state, fleeks) => {
            state.userFleek.data = fleeks;
          },
    }

}

export default fleeks;