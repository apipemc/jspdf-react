import React from 'react'

import { Consumer } from './PDF'

const Rectangle = (props) => {
  const {
    x,
    y,
    width,
    height,
    rx,
    ry,
    borderRadius,
    style,
    color,
    fill,
    lineWidth = 1
  } = props

  return (
    <Consumer>
      {(context) => {
        context.doc.setLineWidth(lineWidth)
        context.doc.setDrawColor(color)
        context.doc.setFillColor(fill)
        if (borderRadius) {
          context.doc.roundedRect(x, y, width, height, rx, ry, style)
        } else {
          context.doc.rect(x, y, width, height, style)
          context.doc.clip()
        }
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Rectangle
