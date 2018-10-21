import React, { Component } from 'react'

import PDF, { Text } from 'jspdf-react'

export default class App extends Component {
  render () {
    return (
      <PDF preview={true}>
        <Text x={10} y={10}>Sample</Text>
        <Text x={10} y={20}>Sample</Text>
        <Text x={10} y={30}>Sample</Text>
      </PDF>
    )
  }
}
