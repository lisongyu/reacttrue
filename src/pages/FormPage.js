import React, {
  Component
} from 'react'


import {
  Form,
  Input,
  Icon,
  Button
} from 'antd'
import 'antd/dist/antd.css';
export default class FormPage extends Component {
  constructor(props) {
    super(props)
    this.changeName = this.changeName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.state = {
      name: "",
      password: ""
    }
  }

  submit = () => {
    console.log('submit')
  }
  changeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    const {
      name,
      password
    } = this.state
    return ( <
      div >
      <
      h3 > FormPage < /h3> <
      Form >
      <
      Form.Item >
      <
      Input placeholder = "请输入姓名"
      value = {
        name
      }
      onChange = {
        this.changeName
      }
      / >

      <
      /Form.Item> <
      Form.Item >
      <
      Input type = "password"
      placeholder = "请输入密码"
      value = {
        password
      }
      onChange = {
        this.changePassword
      }
      / > <
      /Form.Item> <
      Button type = "primary"
      onClick = {
        this.submit
      } >
      提交 <
      /Button> < /
      Form > <
      /div>
    )
  }
}