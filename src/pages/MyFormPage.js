import React, { Component } from 'react'
import kFormCreate from "../components/KFormCreate"
@kFormCreate
class MyFormPage extends Component {
  submit=()=>{
    console.log('submit')
  }
  render() {
    console.log('props',this.props)
    const {getFieldDecorator} = this.props
    return (
      <div>
        <h3>MyFormPage</h3>
        {getFieldDecorator('name',{})(
          <input type="text" name="" placeholder="请输入你的姓名" id=""/>
        )}
       
        <input type="password" name="" placeholder="请输入你的密码" id=""/>
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}

export default MyFormPage
