import React, { Component } from 'react';
import Track from './Track'
import api from '../api'
import './tracks.css'

class Tracks extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tracks: [],
      offset: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  async componentDidMount() {
    const tracks = await api.tracks.getMeTracks()
    // console.log(tracks)
    if (tracks.items.length > 0) {
      this.setState({
        tracks: tracks.items
      })
    }
  }

  async handleNext() {
    // event.preventDefault()
    // console.log('ok')
    console.log(this.state.offset)
    const offset = this.state.offset + 20
    console.log(offset)
    const tracks = await api.tracks.getMeTracks(offset)
    // console.log(tracks)
    if (tracks.items.length > 0) {
      this.setState({
        tracks: tracks.items,
        offset: offset
      })
    }
  }

  async handlePrevious() {
    console.log(this.state.offset)
    const offset = this.state.offset - 20
    console.log(offset)
    const tracks = await api.tracks.getMeTracks(offset)
    // console.log(tracks)
    if (tracks.items.length > 0) {
      this.setState({
        tracks: tracks.items,
        offset: offset
      })
    }
  }

  render() {
    const { tracks } = this.state
    return <div className="container">
      <div className="Tracks">
        {tracks.map((item) => {
          return <Track data={item} key={item.track.id}/>
        })}
      </div>
      <div className="controls">
        {
          this.state.offset > 0 && 
          <button className="previous">
            <a href="#" onClick={ this.handlePrevious }>Previous</a>
          </button>
        }
        <button className="next">
          <a href="#" onClick={ this.handleNext }>Next</a>
        </button>
      </div>
    </div>
  }
}

export default Tracks