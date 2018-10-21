import React, { Component } from 'react'

import PDF, { Text, AddPage, Line, Image } from 'jspdf-react'

import OctoCatImage from './octocat.jpg'

export default class App extends Component {
  render () {
    return (
      <PDF
        properties={
          { title: 'Acme' }
        }
        preview={true}
      >
        <Text x={35} y={25} size={40}>Octonyan loves jsPDF</Text>
        <Image src={OctoCatImage} x={15} y={40} width={180} height={180} />
        <AddPage />
        <Text x={10} y={20} fontStyle={'italic'}>Sample 2</Text>
        <Line lines={20} x={30} y={60} scale={30}/>
        <AddPage format={'a6'} orientation={'l'}/>
        <Text x={10} y={30} color={'red'}>Sample 3</Text>
      </PDF>
    )
  }
}
