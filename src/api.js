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
    async getMeTracks(offset = 0){
      try {
        // console.log(params.access_token)
        if (params.access_token) {
          const response = await fetch(`${baseUrl}/tracks?offset=${offset}&limit=20`, header);
          const data = await response.json();
          return data;
        }

        return {
          items: []
        }
      } catch(err) {
        console.log(err)
        return []
      }
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