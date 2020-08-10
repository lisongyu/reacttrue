import React, { Component } from 'react'


export default class Img extends Component {
  
   
    render() {
      //let ImgUrl=require('../assets/images/'+this.props.src)
        return (
            <div className="img-div">
                <img src={require('../assets/images/'+this.props.src)} alt=""/>
            </div>
        )
    }
}
