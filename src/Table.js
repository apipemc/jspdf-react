import React from 'react'

import { Consumer } from './PDF'

const Text = (props) => {
  const {
    // data
    head,
    body,
    // Styling
    theme = 'striped',
    styles = {},
    headStyles = {},
    footStyles = {},
    bodyStyles = {},
    alternateRowStyles= {},
    columnStyles = {},
    // Properties
    startY = false,
    margin = 40,
    pageBreak = 'auto',
    rowPageBreak = 'auto',
    tableWidth = 'auto',
    showHead = 'everyPage',
    showFoot = 'everyPage',
    tableLineColor = 200,
    tableLineWidth = 0,
    tableId = '',
    // Hooks
    didParseCell = (HookData) => {},
    willDrawCell = (HookData) => { },
    didDrawCell = (HookData) => { },
    didDrawPage  = (HookData) => { },
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.autoTable({
          head,
          body,
          // Styling
          theme,
          styles,
          headStyles,
          footStyles,
          bodyStyles,
          alternateRowStyles,
          columnStyles,
          // Properties
          startY,
          margin,
          pageBreak,
          rowPageBreak,
          tableWidth,
          showHead,
          showFoot,
          tableLineColor,
          tableLineWidth,
          tableId,
          // Hooks
          didParseCell,
          willDrawCell,
          didDrawCell,
          didDrawPage
        })
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Text
