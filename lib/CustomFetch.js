async function customFetch(url, method = "GET", data = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          let responseData;

          // Check if the response is JSON
          const contentType = xhr.getResponseHeader("Content-Type") || "";
          if (contentType.includes("application/json")) {
            try {
              responseData = JSON.parse(xhr.responseText);
            } catch (error) {
              const parseError = new Error(
                `Failed to parse JSON response. ${error.message}`
              );
              parseError.xhrResponse = xhr.responseText; // Include raw response for debugging
              reject(parseError);
              return;
            }
          } else {
            responseData = xhr.responseText;
          }

          resolve(responseData);
        } else {
          const statusError = new Error(`HTTP error! Status: ${xhr.status}`);
          statusError.xhrResponse = xhr.responseText; // Include raw response for debugging
          reject(statusError);
        }
      }
    };

    xhr.open(method, url, true);

    // Set headers
    if (headers) {
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
    }

    // Set the request payload

    const requestData = data ? JSON.stringify(data) : null;

    // Send the request

    xhr.send(requestData);
  });
}

// CommonJS export
if (typeof module !== "undefined" && module.exports) {
  module.exports = customFetch;
}

// ES6 export
if (typeof exports !== "undefined") {
  exports.default = customFetch;
}
