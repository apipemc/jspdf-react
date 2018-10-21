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
        const specialElementHandlers = {
          [`#${sourceById}`]: () => true
        }
        const html = document.getElementById(sourceById)
        context.doc.fromHTML(html, x, y, {
          'elementHandlers': specialElementHandlers
        })
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Html
