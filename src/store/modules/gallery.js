import axiosClient from "../../axios";

const gallery = {
  namespaced: true,
  state: {
    gallery: {
      data: [],
    },
  },

  actions: {
    getAllPics({ commit }, id) {
      return axiosClient.get(`gallery/${id}`).then((res) => {
        commit("setGallery", res.data);
        console.log(res.data);
        return res;
      });
    },

    getPics({ commit }) {
      return axiosClient.get("gallery").then((res) => {
        commit("setGallery", res.data);
        console.log(res.data);
        return res;
      });
    },

    //update first gallery picture
    updateFirstPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient.put("/first-picture", user).then((res) => {
        commit("setGallery", res.data);
        return res;
      });
    },

     //update second gallery picture
    updateSecondPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient.put("/second-picture", user).then((res) => {
        commit("setGallery", res.data);
        return res;
      });
    },

     //update third gallery picture
     updateThirdPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient.put("/third-picture", user).then((res) => {
        commit("setGallery", res.data);
        return res;
      });
    },

     //update fourth gallery picture
     updateFourthPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient.put("/fourth-picture", user).then((res) => {
        commit("setGallery", res.data);
        return res;
      });
    },

     //update fifth gallery picture
     updateFifthPicture({ commit }, user) {
      delete user.avatar_url;
      //console.log(user);
      return axiosClient.put("/fifth-picture", user).then((res) => {
        commit("setGallery", res.data);
        return res;
      });
    },

    
  },

  mutations: {
    setGallery: (state, images) => {
      state.gallery.data = images;
    },
  },
};

export default gallery;
