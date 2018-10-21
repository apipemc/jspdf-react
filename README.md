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

import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'

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
      <React.Fragment>
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
          <AddPage format='a6' orientation='l' />
          <Text x={10} y={10} color='red'>Sample</Text>
          <Line x1={20} y1={20} x2={60} y2={20}/>
          <AddPage />
          <Html sourceById='page' />
        </PDF>
        <div id="page" style={{
          visibility: "hidden"
        }}>
          <h1>Source Html</h1>
            <p>
              <strong>lorem ipsumLorem </strong>Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
        </div>
      </React.Fragment>
    )
  }
}
```

## License

MIT © [apipemc](https://github.com/apipemc)
