const EasyFetch = require("./lib/EasyFetch.js");

// Create an instance of EasyFetch with a base URL and optional default headers
const api = new EasyFetch("https://example.com", {
  Authorization: "Bearer YOUR_ACCESS_TOKEN",
  "Content-Type": "application/json",
});

// Example GET request
api.get({
  url: "/todos/1",
  headers: {
    "Custom-Header": "CustomValue",
  },
  callback: async ({ loading, data, error }) => {
    if (loading) {
      console.log("Loading...");
    } else if (data) {
      console.log("Data:", data);
    } else {
      console.error("Error:", error);
    }
  },
});

// Example POST request
api.post({
  url: "/path",
  data: {
    title: "New Post",
    content: "This is a new post.",
  },
  callback: async ({ loading, data, error }) => {
    if (loading) {
      console.log("Creating post...");
    } else if (data) {
      console.log("Post created:", data);
    } else {
      console.error("Error:", error);
    }
  },
});

// Example PUT request
api.put({
  url: "/posts/1",
  data: {
    title: "Updated Post",
    content: "This post has been updated.",
  },
  callback: async ({ loading, data, error }) => {
    if (loading) {
      console.log("Updating post...");
    } else if (data) {
      console.log("Post updated:", data);
    } else {
      console.error("Error:", error);
    }
  },
});

// Example DELETE request
api.delete({
  url: "/posts/1",
  callback: async ({ loading, data, error }) => {
    if (loading) {
      console.log("Deleting post...");
    } else if (data) {
      console.log("Post deleted:", data);
    } else {
      console.error("Error:", error);
    }
  },
});
