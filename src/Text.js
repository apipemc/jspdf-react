import React from 'react'

import { Consumer } from './PDF'

const Text = (props) => {
  const {
    x,
    y,
    children,
    flags,
    angle,
    align,
    color = '#000',
    fontName = 'helvetica',
    fontStyle = 'normal',
    size = 16
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.setTextColor(color)
        context.doc.setFont(fontName)
        context.doc.setFontStyle(fontStyle)
        context.doc.setFontSize(size)
        context.doc.text(children, x, y, flags, angle, align)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Text
