import React from 'react'

import { Consumer } from './PDF'

const ChangePage = (props) => {
  const { page } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.setPage(page)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default ChangePage
