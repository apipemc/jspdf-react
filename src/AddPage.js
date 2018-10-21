import React from 'react'

import { Consumer } from './PDF'

const AddPage = (props) => {
  const { format = 'a4', orientation = 'portrait' } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.addPage(format, orientation)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default AddPage
