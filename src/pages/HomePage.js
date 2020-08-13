import React, { Component } from 'react'
import Layout from './Layout';

export default class HomePage extends Component {
    render() {

        return (
          <Layout showTopBar={false} showBottomBar={true}>
            <div className="home-page">
               <h3>HomePage</h3>
            </div>
          </Layout>
        )
    }
}
