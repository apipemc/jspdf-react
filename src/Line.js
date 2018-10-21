import React from 'react'

import { Consumer } from './PDF'

const Line = (props) => {
  const { lines, x, y, scale, style, closed, width = 1 } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.setLineWidth(width)
        context.doc.line(lines, x, y, scale, style, closed)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Line
