import React from 'react'

import { Consumer } from './PDF'

const Html = (props) => {
  const {
    x,
    y,
    sourceById,
  } = props
  return (
    <Consumer>
      {(context) => {
        const html = document.getElementById(sourceById)
        context.doc.fromHTML(html.innerHTML, x, y)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Html
