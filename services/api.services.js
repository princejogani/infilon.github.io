/* eslint-disable radix */
import axios from "axios";

function errorRedirect(msg) {
  if (msg === "Network Error") {
    console.log("Network Error");
  }
}

export function Post(url, payload, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, payload, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        errorRedirect(e.message);
        reject(e);
      });
  });
}

export function Put(url, payload, config) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, payload, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        errorRedirect(e.message);
        reject(e);
      });
  });
}

// export function Get(url, config) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, config)
//             .then((response) => {
//                 resolve(response.data);
//             })
//             .catch((e) => {
//                 errorRedirect(e.message);
//                 reject(e);
//             });
//     });
// }

export function Get(url, config) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        errorRedirect(e.message);
        reject(e);
      });
  });
}

export function Delete(url, config) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        errorRedirect(e.message);
        reject(e);
      });
  });
}
