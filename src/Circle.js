import React from 'react'

import { Consumer } from './PDF'

const Circle = (props) => {
  const {
    x,
    y,
    r,
    rx,
    ry,
    style,
    color,
    fill,
    type,
    width = 1
  } = props

  return (
    <Consumer>
      {(context) => {
        context.doc.setLineWidth(width)
        context.doc.setDrawColor(color)
        context.doc.setFillColor(fill)
        if (type === 'ellipse') {
          context.doc.ellipse(x, y, rx, ry, style)
        } else {
          context.doc.circle(x, y, r, style)
        }
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Circle
