import React, { Component } from 'react';
import Track from './Track'
import api from '../api'

class Tracks extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tracks: []
    }
  }

  async componentDidMount() {
    const tracks = await api.tracks.getMeTracks()
    console.log(tracks)
    tracks.length > 0 ? (
      this.setState({
        tracks: tracks.items
      })
    ) : null
  }

  render() {
    const { tracks } = this.state
    return <div className="Tracks">
      {tracks.map((item) => {
        return <Track data={item} key={item.track.id}/>
      })}
    </div>
  }
}

export default Tracks