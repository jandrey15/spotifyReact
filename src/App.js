import React, { Component } from 'react';
import Tracks from './components/Tracks'
import logo from './spotify.png'
import './App.css'
// import './components/tracks.css'

class App extends Component {

  constructor(props) {
    super(props)
    const params = this.getHashParams();
    // console.log(params)
    this.state = {
      access_token: params.access_token || null
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    // console.info('ok paso ' + hashParams)
    return hashParams;
  }

  // componentDidMount() {
  //   fetch('https://api.spotify.com/v1/me', {
  //     headers: {
  //       'Authorization': 'Bearer ' + this.state.access_token
  //     }
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  //   fetch('https://api.spotify.com/v1/me/playlists', {
  //     headers: {
  //       'Authorization': 'Bearer ' + this.state.access_token
  //     }
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  //   fetch('https://api.spotify.com/v1/browse/featured-playlists?country=CO', {
  //     headers: {
  //       'Authorization': 'Bearer ' + this.state.access_token
  //     }
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  render() {

    let uri = window.location.origin
    if (uri != 'http://localhost:3000') {
      uri = 'https://server.johnserrano.xyz/login'
    } else {
      uri = 'http://localhost:8888/login'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } alt="logo-spotify"/>
        </header>
        {
          !this.state.access_token &&
          <button id="login">
            <a href={ uri }>
              Login as spotify
            </a>
          </button>
        }
        {
          this.state.access_token &&
          <Tracks />
        }
      </div>
    );
  }
}

export default App;
