import React, { Component } from 'react'
// import { bindActionCreators } from 'redux';

const ValueContext = React.createContext()
export const connect = (mapStateToProps = state => state, mapDispatchToProps) => WrappedComponent => {
  return class extends Component {
    // 此时组件的所有生命周期都能获得
    static contextType = ValueContext
    constructor(props) {
      super(props)

      this.state = {
        props: {}
      }

    }
    componentDidMount () {
      const { subscribe } = this.context;
      this.update()
      subscribe(() => {
        this.update()
      })

    }
    update = () => {
      const { getState, dispatch } = this.context;
      let stateProps = mapStateToProps(getState());

      let dispatchProps;
      // mapDispatchToProps Function Object
      if (typeof mapDispatchToProps === 'object') {
        // 
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      } else if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch, this.props)
      } else {
        dispatchProps = { dispatch }
      }
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      })

    }
    render () {
      console.log('this.context', this.context)
      console.log(this.state.props)
      return <WrappedComponent {...this.state.props} />;
    }

  }
}

export class Provider extends Component {
  render () {
    return <ValueContext.Provider value={this.props.store}>
      {this.props.children}
    </ValueContext.Provider>

  }
}

function bindCreators (creators, dispatch) {
  return (...args) => dispatch(creators(...args))
}
//{add: () => ({ type: "ADD" }) }
export function bindActionCreators (creators, dispatch) {
  const obj = {}
  for (const key in creators) {
    obj[key] = bindCreators(creators[key], dispatch)
  }
  return obj;
}
