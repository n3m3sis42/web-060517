## Overview


Today we will be learning how to fully create single page applications with React Router

## Prerequisities

Students should be able to:

* Create a React Component
* Pronounce Gif with a J
* Pass down props and work with state



## BackStory


> Backstory
To be candid, we were pretty frustrated with the direction we’d taken React Router by v2. We (Michael and Ryan) felt limited by the API, recognized we were reimplementing parts of React (lifecycles, and more), and it just didn’t match the mental model React has given us for composing UI. We were walking through the hallway of a hotel just before a workshop discussing what to do about it. We asked each other: “What would it look like if we built the router using the patterns we teach in our workshops?” It was only a matter of hours into development that we had a proof-of-concept that we knew was the future we wanted for routing. We ended up with API that wasn’t “outside” of React, an API that composed, or naturally fell into place, with the rest of React. We think you’ll love it. - React-Router Peeps


## Setup

First we must install react-router

```
  yarn add react-router-dom
```


* We all should be using Yarn by now its awesome!



To get started with React Router (RR) we first need the Router component. In RR, we need to make use of the BrowserRouter component. No one actually calls it BrowserRouter since we would have to type <BrowserRouter />.

In your `index.js` file import React Router


`import { BrowserRouter as Router } from 'react-router-dom'`


Now that we have the  `<Router />` component we have to make our App component a child of this new component.


```
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

```
