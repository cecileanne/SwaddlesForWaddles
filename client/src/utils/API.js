import axios from "axios";

export default {
  // swaddle
  swaddle: function(userSelectedObject) {
    return axios.post("/api", userSelectedObject); // this is a promise!
  },

  jimpImages: function(configObject) {
    return axios.post("/api/jimpimages", configObject); // this is a promise!
  },

  //get all donations of a user
  getDonations: function() {
    return axios.get("/api/donations"); // this is a promise!
  },
  //post one donation
  postDonation: function(donationData) {
    return axios.post("/api/donations", donationData); // this is a promise!
  },
  getGalleryImages: function() {
    return axios.get("/api/gallery"); // this is a promise!
  },
  //post one Gallery image
  postGalleryImage: function(galleryData) {
    return axios.post("/api/gallery", galleryData); // this is a promise!
  }
};
