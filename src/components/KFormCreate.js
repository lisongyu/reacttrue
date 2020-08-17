import React,{Component} from "react"

export default function KFormCreate(Cmp){
  return class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:''
      }
    }
    handleChange=(e)=>{
      //setState name value
      let {value,name}=e.target
      console.log(name,value)
      this.setState({
        [name]:value

      })
    }
    getFieldDecorator=(field,option)=>{
      return InputCmp=>{
        // 克隆一份
        return React.cloneElement(InputCmp,{
          name:field,
          value:this.state[field]||'',
          onChange:this.handleChange
        })
      }
    };
    render(){
      return (
        <div className="border">
          <Cmp 
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
          />
        </div>
      )
    }
  }
}