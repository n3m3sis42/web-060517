import React, { Component } from 'react'

function createResource(PassedInComponent, resource) {
  // In this function I want to generate a new Component
  // This component should fetch based on resource i.e resource will be people/starships etc
  // and return a new component that renders my passed in component i.e List

  return class extends React.Component {

    state = {
      json: {
        results: []
      }
    }

    componentDidMount() {
      console.log("Within Mount About to Fetch")
      fetch(`https://swapi.co/api/${resource}`)
      .then(res => res.json())
      .then(json => {

        this.setState({
          json: json
        })
      })
    }

    render() {
      // RenderedComponent will be List
      return (
        <PassedInComponent results={this.state.json.results}/>
      )
    }



  }
}

export default createResource
