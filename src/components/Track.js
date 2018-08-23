import React, { Component } from 'react';

class Track extends Component {

  render() {
    const { data: { track } } = this.props
    // console.log(track)
    return <div className="Track">
      <div className="img">
        <a href={ track.external_urls.spotify } target="_blank">
          <img src={ track.album.images[0].url } alt={ track.album.album_type }/>
        </a>
      </div>
      <h2 className="name">{ track.name }</h2>
      <div className="artists">
        {
          track.artists.map((item) => <h3 className="name" key={ item.id }>{ item.name }</h3> )
        }
      </div>
      <div className="preview">
        <audio controls autoPlay={false}>
          <source src={ track.preview_url } type='audio/mpeg' />
        </audio>
      </div>
    </div>
  }
}

export default Track