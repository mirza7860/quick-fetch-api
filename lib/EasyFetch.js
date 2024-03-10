const customFetch = require("./CustomFetch.js");

class EasyFetch {
  constructor(baseUrl, defaultHeaders = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
  }

  async get({ url, headers = {}, callback }) {
    return this.request({ url, method: "GET", headers, callback });
  }

  async post({ url, data, headers = {}, callback }) {
    return this.request({ url, method: "POST", data, headers, callback });
  }

  async put({ url, data, headers = {}, callback }) {
    return this.request({ url, method: "PUT", data, headers, callback });
  }

  async patch({ url, data, headers = {}, callback }) {
    return this.request({ url, method: "PATCH", data, headers, callback });
  }

  async delete({ url, headers = {}, callback }) {
    return this.request({ url, method: "DELETE", headers, callback });
  }

  async request({ url, method, data, headers, callback }) {
    const fullUrl = this.baseUrl + url;
    const requestHeaders = { ...this.defaultHeaders, ...headers };
    try {
      callback({ loading: true, data: null, error: null });
      const response = await customFetch(fullUrl, method, data, requestHeaders);
      callback({ loading: false, data: response, error: null });
    } catch (error) {
      console.error("Error in EasyFetch:", error.message);
      callback({ loading: false, data: null, error });
    }
  }
}

// CommonJS export
if (typeof module !== "undefined" && module.exports) {
  module.exports = EasyFetch;
}

// ES6 export
if (typeof exports !== "undefined") {
  exports.default = EasyFetch;
}
