import React from 'react'

import { Consumer } from './PDF'

const Text = (props) => {
  const {
    // data
    columns,
    rows,
    // Styling
    theme = 'striped',
    styles = {},
    headerStyles = {},
    bodyStyles = {},
    alternateRowStyles= {},
    columnStyles = {},
    // Properties
    startY = false,
    margin = 40,
    pageBreak = 'auto',
    tableWidth = 'auto',
    showHeader = 'everyPage',
    tableLineColor = 200,
    tableLineWidth = 0,
    // Hooks
    createdHeaderCell = (cell, data) => { cell, data },
    createdCell = (cell, data) => { cell, data },
    drawHeaderRow = (row, data) => { row, data },
    drawRow  = (row, data) => { row, data },
    drawHeaderCell = (cell, data) => { cell, data },
    drawCell = (cell, data) => { cell, data },
    addPageContent = (data) => data
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.autoTable(columns, rows, {
          // Styling
          theme,
          styles,
          headerStyles,
          bodyStyles,
          alternateRowStyles,
          columnStyles,
          // Properties
          startY,
          margin,
          pageBreak,
          tableWidth,
          showHeader,
          tableLineColor,
          tableLineWidth,
          // Hooks
          createdHeaderCell,
          createdCell,
          drawHeaderRow,
          drawRow,
          drawHeaderCell,
          drawCell,
          addPageContent
        })
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Text
