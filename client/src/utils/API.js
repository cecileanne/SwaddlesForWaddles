import axios from "axios";

// TO DO: USE COMPONENTS INSTEAD OF URL
// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";

// Export an object with the finished compilation onto the screen
// Add a then that will save as a jpg on click?

export default {
  swaddle: function(userSelectedObject) {
    return axios.post("/api", userSelectedObject); // this is a promise!
  },

  jimpImages: function(configObject) {
    return axios.post("/api/jimpimages", configObject); // this is a promise!
  },

  textInput: function(userTextInput) {
    return axios.post("/api/textInput", userTextInput); // this is a promise!
  }
};
