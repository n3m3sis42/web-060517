import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// const App = React.createClass({
//   render: function() {
//     return(<h1>Hello from React Create Class</h1>)
//   }
// })

const FunctionalComponent = () => <h1>Hello From Functional Component</h1>




ReactDOM.render(<App name="Steak"/>, document.getElementById('main'))
