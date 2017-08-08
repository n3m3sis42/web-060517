## Overview


Today we will cover how to use props and state in React. We will also be taking a look at React's event system

## Prerequisites

* A student should know what React is
* A student should know how to make a component

## Objectives
1. What are props and state
2. How to use Events
3. Build a simple todo app


## Setting up project

Create a new React project using `create-react-app`

`create-react-app todoapp && cd todoapp`

Create React App will create several files and folders for us. In many ways it will work like `rails new`

Inside the `src` folder open the `App.js` file


Replace the your  `App` Component definition with the following


```
class App extends Component {
  render() {
    return (
      <div className="ui grid two column centered">
        <div className="column">
        <div id="todo-list">
          <ul>
            <li>Wash Dishes</li>
            <li>Do Laundry</li>
          </ul>
        </div>
        <div id="todo-form">
          <form action="" className="ui form">
            <div className="field">
            <input type="text" /><br/>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}
```


Now that we have a very basic App component configured let's break it up into separate components




You will be creating the following Components:
2. TodoList
3. TodoItem
2. TodoForm

Note in a later version of this application we might want to consider adding a TodoContainer component to hold onto all of our data.

**Note** You may have noticed some classnames. We will be using the semantic ui library for some sweet styling.

Include the following line in your `public/index.html` file in the head.

`<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>`
