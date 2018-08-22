import React, { Component } from 'react';

class Track extends Component {

  render() {
    const { data: { track } } = this.props
    console.log(track)
    return <div className="Track">
      <div className="img">
        <img src={ track.album.images[0].url } alt={ track.album.album_type }/>
      </div>
      <h2 className="name">{ track.name }</h2>
      {
        track.artists.map((item) => {
          return <div className="artists" key={ item.id }>
            <h3 className="name">{ item.name }</h3>
          </div>
        })
      }
      <div className="preview">
        <audio controls autoPlay={false}>
          <source src={ track.preview_url } type='audio/mpeg' />
        </audio>
      </div>
    </div>
  }
}

export default Track