import React from 'react'

import { Consumer } from './PDF'

const Text = (props) => {
  const { x, y, children, flags, angle, align} = props
  return (
    <Consumer>
      {(context) => {
        return context.addProperty(context.doc.text(children, x, y, flags, angle, align))
      }}
    </Consumer>
  )
}

export default Text
