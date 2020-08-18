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

const nameRules = {
  required: true,
  message: '请输入姓名'
}
const passwordRules = {
  required: true,
  message: '请输入密码'
}
class FormPage extends Component {


  submit = () => {
    const {
      getFieldsValue,
      getFieldValue,
      validateFields
    } = this.props.form
    validateFields((err, values) => {
      if (err) {
        console.log('err', err)
      } else {
        console.log('success', values)
      }
    })
    console.log('submit', getFieldsValue(), getFieldValue('name'))
  }

  render() {
    console.log('props', this.props)
    const {
      getFieldDecorator
    } = this.props.form
    return ( <
      div >
      <
      h3 > FormPage < /h3>  <
      Form >
      <
      Form.Item > {
        getFieldDecorator('name', {
          rules: [nameRules]
        })( <
          Input placeholder = "请输入姓名" / >
        )
      } <
      /Form.Item> <
      Form.Item > {
        getFieldDecorator('password', {
          rules: [passwordRules]
        })( <
          Input type = "password"
          placeholder = "请输入密码" / >
        )
      } <
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