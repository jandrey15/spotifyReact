// import fetch from 'isomorphic-fetch';

const baseUrl = 'https://api.spotify.com/v1/me';

function getHashParams () {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  // console.info('ok paso ' + hashParams)
  return hashParams;
}

const params = getHashParams();

const header = {
  headers: {
    'Authorization': 'Bearer ' + params.access_token
  }
}

const api = {
  tracks: {
    async getMeTracks(page = 1){
      const response = await fetch(`${baseUrl}/tracks`, header);
      const data = await response.json();
      return data;
    },
    // async getSingle(id = 1){
    //   const response = await fetch(`${baseUrl}/posts/${id}`);
    //   const data = await response.json();
    //   return data;
    // },
    // async getComments(id = 1){
    //   const response = await fetch(`${baseUrl}/posts/${id}/comments`);
    //   const data = await response.json();
    //   return data;
    // },
  },
  // users:{
  //   async getSingle(id = 1){
  //     const response = await fetch(`${baseUrl}/users/${id}`);
  //     const data = await response.json();
  //     return data;
  //   },
  // },
};

export default api;