# jspdf-react

>

[![NPM](https://img.shields.io/npm/v/jspdf-react.svg)](https://www.npmjs.com/package/jspdf-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jspdf-react
```

## Usage

```jsx
import React, { Component } from 'react'

import PDF, { Text, AddPage, Line, Image, Table } from 'jspdf-react'

import OctoCatImage from './octocat.jpg'

class Example extends Component {
  render () {
    const properties = { title: 'Acme' }
    const columns = ["ID", "Name", "Country"]
    const rows = [
        [1, "Shaw", "Tanzania"],
        [2, "Nelson", "Kazakhstan"],
        [3, "Garcia", "Madagascar"],
    ]
    return (
      <PDF
        properties={properties}
        preview={true}
      >
        <Text x={35} y={25} size={40}>Octonyan loves jsPDF</Text>
        <Image src={OctoCatImage} x={15} y={40} width={180} height={180} />
        <AddPage />
        <Table
          columns={columns}
          rows={rows}
        />
        <AddPage format={'a6'} orientation={'l'}/>
        <Text x={10} y={10} color={'red'}>Sample</Text>
        <Line lines={30} x={11} y={11} scale={11}/>
      </PDF>
    )
  }
}
```

## License

MIT © [apipemc](https://github.com/apipemc)
