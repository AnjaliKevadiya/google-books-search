import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
};
