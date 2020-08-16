import React, {
  Component
} from 'react'


import {
  Form
} from '@ant-design/compatible';
import {
  Input,
  Button
} from 'antd';
import '@ant-design/compatible/assets/index.css';
import 'antd/dist/antd.css';

class FormPage extends Component {


  submit = () => {
    console.log('submit')
  }

  render() {
    console.log('props', this.props)

    return ( <
      div >
      <
      h3 > FormPage < /h3>  <
      Form >
      <
      Form.Item >
      <
      Input placeholder = "请输入姓名"

      /
      >

      <
      /Form.Item> <
      Form.Item >
      <
      Input type = "password"
      placeholder = "请输入密码"

      /
      >
      <
      /Form.Item> <
      Button type = "primary"
      onClick = {
        this.submit
      } >
      提交 <
      /Button></Form > <
      /div>
    )
  }
}

export default Form.create()(FormPage)