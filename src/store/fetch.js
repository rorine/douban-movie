import axios from 'axios';

// 正在上映 API
const theaters_API = '/api/v2/movie/in_theaters';
// 即将上映 API
const comingSoon_API = '/api/v2/movie/coming_soon';

// 使用 Promise 请求数据
function fetch(url, params) {
  return new Promise(function(resolve, reject) {
    axios.get(url, {
      params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

export {
  theaters_API,
  comingSoon_API,
  fetch
}
