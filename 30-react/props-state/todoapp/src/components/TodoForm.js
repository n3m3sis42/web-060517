import React from 'react'


class TodoForm extends React.Component {


    constructor() {
        super()
        this.state = {
            task: ""
        }
    }

    onSubmit = (event) => {
      console.log(this.state)
        event.preventDefault()
        console.log("On Submit")
        // addTODO from parent
        this.props.handleSubmit(this.state.task)
        this.setState({
          task: ""
        })
    }


    handleInputChange = (e) => {
      this.setState({
        task: e.target.value
      })
    }

    render() {

        return (
        <div id="todo-form">
          <form action="" className="ui form" onSubmit={this.onSubmit}>
            <div className="field">
            <input type="text" value={this.state.task} onChange={this.handleInputChange}/><br/>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </div>
        )
    }
}

export default TodoForm
