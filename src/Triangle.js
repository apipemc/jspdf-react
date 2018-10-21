import React from 'react'

import { Consumer } from './PDF'

const Triangle = (props) => {
  const {
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
    style,
    color,
    fill,
    width = 1
  } = props

  return (
    <Consumer>
      {(context) => {
        context.doc.setLineWidth(width)
        context.doc.setDrawColor(color)
        context.doc.setFillColor(fill)
        context.doc.triangle(x1, y1, x2, y2, x3, y3, style)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Triangle
