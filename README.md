<div align="center">

# quick-fetch-api

[![npm version](https://badge.fury.io/js/quick-fetch-api.svg)](https://badge.fury.io/js/quick-fetch-api) [![npm license](https://img.shields.io/npm/l/quick-fetch-api.svg)](https://opensource.org/licenses/MIT)

quick-fetch-api is a minimalistic HTTP client designed for effortless and asynchronous requests. It offers a straightforward interface, streamlining HTTP operations for a seamless developer experience.

</div>

## Features

- **Easy Integration:** Simplifies making HTTP requests with a clean and intuitive interface.
- **Asynchronous:** Utilizes asynchronous operations, allowing for efficient non-blocking requests.
- **Loading State:** Provides a loading state indicator to manage asynchronous requests more effectively.
- **Customizable:** Provides flexibility for customizing headers, methods, and request data.
- **Higher-Level Abstraction:** Includes the `EasyFetch` class for a more user-friendly approach to handling HTTP requests.

## Installation

Install the package using npm:

```bash
npm install quick-fetch-api
```

## Usage : 

```javascript
const EasyFetch = require('quick-fetch-api');

// Example usage
const apiUrl = 'https://api.example.com';
const api = new EasyFetch(apiUrl, {
  'Content-Type': 'application/json',
  // Add headers if any
});

// GET request example
api.get({
  url: '/data',
  callback: ({ loading, data, error }) => {
    if (loading) {
      console.log('Loading...');
    } else if (data) {
      console.log('Data:', data);
    } else {
      console.error('Error:', error);
    }
  },
});

// POST request example
const postData = { key: 'value' };
api.post({
  url: '/create',
  data: postData,
  callback: ({ loading, data, error }) => {
    if (loading) {
      console.log('Loading...');
    } else if (data) {
      console.log('Response:', data);
    } else {
      console.error('Error:', error);
    }
  },
});

// {like that you can do PUT,PATCH,DELETE}
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to modify or enhance it further based on your specific project details.


