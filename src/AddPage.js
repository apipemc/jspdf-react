import React from 'react'

import { Consumer } from './PDF'

const AddPage = (props) => {
  const { format, orientation } = props
  return (
    <Consumer>
      {(context) => {
        return context.addProperty(context.doc.addPage(format, orientation))
      }}
    </Consumer>
  )
}

export default AddPage
