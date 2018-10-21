import React from 'react'

import { Consumer } from './PDF'

const Image = (props) => {
  const {
    src,
    x,
    y,
    width,
    height,
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.addImage(src, x, y, width, height)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Image
