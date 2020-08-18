import React, {
  Component
} from 'react'
import kFormCreate from "../components/KFormCreate"
const nameRules = {
  required: true,
  message: '请输入姓名'
}
const passwordRules = {
  required: true,
  message: '请输入密码'
}
@kFormCreate
class MyFormPage extends Component {
  submit = () => {
    const {
      getFieldsValue,
      getFieldValue,
      validateFields
    } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log('err', err)
      } else {
        console.log('success', values)
      }
    })
    console.log('submit', getFieldsValue(),getFieldValue('password'))
  }
  render() {
    console.log('props', this.props)
    const {
      getFieldDecorator
    } = this.props
    return ( <
      div >
      <
      h3 > MyFormPage < /h3> {
      getFieldDecorator('name', { rules: [nameRules]})( <
        input type = "text"
        name = ""
        placeholder = "请输入你的姓名"
        id = "" / >
      )
    }

    {
      getFieldDecorator('password', { rules: [passwordRules]})( <
        input type = "password"
        name = ""
        placeholder = "请输入你的密码"
        id = "" / >
      )
    }

    <
    button onClick = {
        this.submit
      } > 提交 < /button> < /
      div >
  )
}
}

export default MyFormPage