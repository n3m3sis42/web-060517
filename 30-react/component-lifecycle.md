## Objectives

* Understand Component Lifecycle methods


## Prerequisites

Students should be able
* Create a Component
* Pass props and manage State
* Handle React events


## Introduction

Component Lifecyle methods provide us with a way of managing our components through the stages of their existence.

### Birth, Growth & Death



![Birth](https://media.giphy.com/media/26vUBafzKjglmpg1a/giphy.gif)

### Birth
* constructor()
* componentWillMount()
* render()
* componentDidMount()





![Circle of Life](https://media1.giphy.com/media/CDDsXPv8mO2Na/200.webp#0-grid1)

### Growth
* componentWillReceiveProops
* shouldComponentupdate()
* componentWillUpdate()
* render()
* componentDidUpdate()


### Death
* componentWillUnmount()




### Mounting lifecycle methods
Called once on initial render:

| Method             | nextProps | nextState | Can call `this.setState` | Called when?               | Used for                                                                                    |
|--------------------|:---------:|:---------:|:----------------------:|:--------------------------:|:-------------------------------------------------------------------------------------------:|
| `componentWillMount` |     no    |     no    |           yes          | once, just before mounting | setting initial state based on props                                                        |
| `componentDidMount`  |     no    |     no    |           no           | once, just after mounting  | setting up side effects (e.g. creating new DOM elements or setting up asynchronous functions |


### Updating lifecycle methods
Not called on initial render, but always called whenever a subsequent re-render is triggered:

|           Method          | nextProps | nextState | Can call `this.setState` |                       Called when?                      |                                     Used for                                     |
|:-------------------------:|:---------:|:---------:|:----------------------:|:-------------------------------------------------------:|:--------------------------------------------------------------------------------:|
| `componentWillReceiveProps` |    yes    |     no    |           yes          |  many times, whenever component is going to receive new props  |                     applying state changes based on new props                    |
|   `shouldComponentUpdate`   |    yes    |    yes    |           no           |    many times, whenever a re-render has been triggered    |    deciding based on new & old props & state whether a re-render should occur    |
|    `componentWillUpdate`    |    yes    |    yes    |           no           | many times, when new state and props are being received | prepare for the update, dispatch any actions or animations based on state change |
|     `componentDidUpdate`    |    yes*   |    yes*   |           yes          |    many times, just after the re-render has finished    | any DOM updates following a render (mostly interacting with 3rd party libraries) |

\* `componentDidUpdate` will actually receive `prevProps` and `prevState` as arguments, as the newly applied state and props can be accessed through `this.props` and `this.state`.


### Dismounting lifecycle method
Called only once, just before the component is removed from the DOM:

|        Method        | nextProps | nextState | Can call `this.setState` |                     Called when?                    |                         Used for                        |
|:--------------------:|:---------:|:---------:|:----------------------:|:---------------------------------------------------:|:-------------------------------------------------------:|
| `componentWillUnmount` |     no    |     no    |           no           | once, just before component is removed from the DOM | destroying any side effects set up in componentDidMount |
