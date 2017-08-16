import React, { Component } from 'react'
import createResource from './createResource'


class List extends Component {


  render() {

    const results = this.props.results.map((item, index) => { return <li key={index}>{item.name}</li>})
    console.log(this.state)
    return (
      <div>
        <ul>
          {results}
        </ul>
      </div>
    )

  }
}

export default List
