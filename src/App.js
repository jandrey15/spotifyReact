import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Spotify from 'spotify-web-api-js'
// const spotifyApi = new Spotify();

// https://github.com/jmperez/spotify-web-api-js

class App extends Component {

  constructor(props) {
    super(props)
    const params = this.getHashParams();
    console.log(params)
    this.state = {
      access_token: params.access_token || null,
      dataTrack: {
        album: null,
        name: null,
        image: null
      }
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.info('ok paso ' + hashParams)
    return hashParams;
  }

  componentDidMount() {
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + this.state.access_token
      }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })

    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': 'Bearer ' + this.state.access_token
      }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })

    fetch('https://api.spotify.com/v1/browse/featured-playlists?country=CO', {
      headers: {
        'Authorization': 'Bearer ' + this.state.access_token
      }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })

    fetch('https://api.spotify.com/v1/me/tracks', {
      headers: {
        'Authorization': 'Bearer ' + this.state.access_token
      }
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      try {
        data.items.map((item) => {
          // console.log(item.track)
          if (item.track.name === 'Bandida') {
            console.log(item.track)
            this.setState({
              dataTrack: {
                album: item.track.album,
                name: item.track.name,
                image: item.track.album.images[0].url,
                audio: item.track.preview_url
              }
            })
            console.log(this.state.dataTrack)
          } 
        })
      } catch (error) {
        console.warn(error)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { dataTrack } = this.state
    const data = dataTrack
    const divStyle = {
      backgroundImage: `url(${data.image})`,
      height: '300px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <a href="https://server.johnserrano.xyz/login">
            <button>Login as spotify</button>
          </a>
        </p>

        <p>access_token = { this.state.access_token }</p>
  
        <div className="audio">
          <div className="main-wrapper">
            {/* <div class="now-playing__img">
              <img src={ data.image } />
            </div> */}
            {/* <div class="now-playing__side">
              <div class="now-playing__name">{data.name}</div>
              <div class="now-playing__artist">{this.state.dataTrack.artists[0].name}</div>
              <div class="now-playing__status">{this.state.dataTrack.is_playing ? 'Playing' : 'Paused'}</div>
              <div class="progress">
                <div class="progress__bar" style={`width:${this.state.dataTrack.progress_ms * 100 / this.state.dataTrack.duration_ms}%`}></div>
              </div>
            </div> */}
            <div className="audio">
              <a href={data.audio}>Audio</a>
            </div>
            <iframe src={data.audio} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div className="background" style={divStyle}></div>
        </div>
        
      </div>
    );
  }
}

export default App;
