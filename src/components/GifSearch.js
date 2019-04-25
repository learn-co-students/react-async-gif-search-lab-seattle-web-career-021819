import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }
  }



  render() {
    console.log(this.state.query)
    return(
      <div>
        <form onSubmit={this.props.submitHandler(this.state.query)}>
          <input type='text' value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
        </form>
      </div>
    )
  }

}
