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

import PDF, { Text } from 'jspdf-react'

class Example extends Component {
  render () {
    return (
      <PDF preview={true}>
        <Text x={10} y={10}>Sample 1</Text>
        <Text x={10} y={20}>Sample 2</Text>
        <Text x={10} y={30}>Sample 3</Text>
      </PDF>
    )
  }
}
```

## License

MIT © [apipemc](https://github.com/apipemc)
