import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    this.submitHandler()
  }

  submitHandler = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(data => this.setState({
        gifs: data.map(gif => ({url: gif.images.original.url}))
      }))
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch submitHandler={this.submitHandler}/>
      </div>
    )
  }
}
