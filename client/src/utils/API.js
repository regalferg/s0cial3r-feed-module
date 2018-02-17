import axios from "axios";

export default {
  // Gets all books
  getFeeds: function() {
    return axios.get("/api/feeds");
  },
  // Gets the book with the given id
  getFeed: function(id) {
    return axios.get("/api/feeds" + id);
  },
  // Deletes the book with the given id
  deleteFeed: function(id) {
    return axios.delete("/api/feeds/" + id);
  },
  // Saves a book to the database
  saveFeed: function(feedData) {
    return axios.post("/api/feeds", feedData);
  }
};
