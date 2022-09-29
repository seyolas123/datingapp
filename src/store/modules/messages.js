import axiosClient from "../../axios";


const messages = {
  namespaced: true,
    state: {
        message: {
            data: {},
          },
    },

    actions: {
       
        getChat({ commit }, id) {
       
            return axiosClient.get(`/chat/${id}`).then((res) => {
              commit("setMessage", res.data);
              console.log(res)
              return res;
            });
          },

         sendChat({ commit, dispatch }, message) {
            //console.log(message)
            return axiosClient.post('/chat/send', message).then((res) => {
              dispatch('getChat', message.id)
              //console.log(res)
              return res;
            });
          },
    },

    mutations: {
        setMessage: (state, message) => {
            state.message.data = message;
          },


    }

}

export default messages;