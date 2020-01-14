import axios from "axios";

export default {
  jimpImages: function(configObject) {
    return axios.post("/api/jimpimages", configObject); // this is a promise!
  },

  textInput: function(userTextInput) {
    return axios.post("/api/textInput", userTextInput); // this is a promise!
  },
  //get all donations of a user
  getDonations: function(userId) {
    return axios.get(`/donate/donations/${userId}`); // this is a promise!
  },
  //post one donation
  postDonation: function(donationData) {
    return axios.post(`/donate/donations`, donationData); // this is a promise!
  }
  // getGalleryImages: function() {
  //   return axios.get("/api/gallery"); // this is a promise!
  // },
  // //post one Gallery image
  // postGalleryImage: function(galleryData) {
  //   return axios.post("/api/gallery", galleryData); // this is a promise!
  // }
};
