import axios from 'axios';


function callApi(req, cb){
  axios.get(req)
       .then(res => {
         cb(res.data);
       });
  }

  export function fetch(query, cb) {
    const req = `https://api.spotify.com/v1/search?q=${query}&type=album`;
    callApi(req, cb);
  }
