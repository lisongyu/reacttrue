import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'


export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>Routerpage</h3>
        <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>
          <Route exact path='/' component={HomePage1}></Route>
          <Route path='/user' component={User}></Route>
          <Route  component={EmptyPage}></Route>
          
        </Router>
      </div>
    )
  }
}


class HomePage1 extends Component {
  render() {
    return (
      <div>
        <h3>
          HomePage
        </h3>
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <h3>
          User
        </h3>
      </div>
    )
  }
}

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>
        EmptyPage
        </h3>
      </div>
    )
  }
}


