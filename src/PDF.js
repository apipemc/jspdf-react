import jsPDF from 'jsPDF'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const { Provider, Consumer } = React.createContext()

class PDF extends Component {
  static propTypes = {
    orientation: PropTypes.oneOf(['portrait', 'landscape', 'p', 'l']),
    unit: PropTypes.oneOf(['pt', 'mm', 'cm', 'in']),
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    hotfixes: PropTypes.array,
    save: PropTypes.bool,
    filename: PropTypes.string,
    preview: PropTypes.bool,
    autoPrint: PropTypes.bool,
    children: PropTypes.node,
    properties: PropTypes.shape({})
  }

  static defaultProps = {
    save: false,
    autoPrint: false,
    preview: false
  }

  constructor(props) {
    super(props)
    const {
      orientation, unit, format, hotfixes
    } = props
    var doc = new jsPDF({
      orientation,
      unit,
      format,
      hotfixes
    })
    this.state = {
      callChildren: 0,
      doc
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.orientation !== this.props.orientation) {
      return true
    }
    if (nextProps.unit !== this.props.unit) {
      return true
    }
    if (nextProps.format !== this.props.format) {
      return true
    }
    if (nextState.callChildren <= this.props.children.length) {
      return true
    }
    return false
  }

  addProperty = (property) => {
    this.setState(prevState => ({
      doc: property,
      callChildren: prevState.callChildren + 1 })
    )
  }

  render() {
    const {
      save,
      filename,
      preview,
      children,
      autoPrint,
      properties = {},
    } = this.props
    const { doc, callChildren } = this.state

    const isLoad = callChildren === children.length
    const content = (
      <Provider value={{
        doc: doc,
        addProperty: this.addProperty
      }}>
        {children}
      </Provider>
    )

    doc.setProperties(properties)
    if (isLoad && save) {
      if (autoPrint) doc.autoPrint()
      doc.save(filename)
      return <React.Fragment>{content}</React.Fragment>
    } else if (isLoad && preview) {
      const uri = doc.output('datauristring')
      return (
        <React.Fragment>
          {content}
          <iframe frameBorder='0' width='500' height='800' src={uri} />
        </React.Fragment>
      )
    }
    return <React.Fragment>{content}</React.Fragment>
  }
}

export default PDF
