import jsPDF from 'jspdf'
import 'jspdf-autotable'
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
    previewWidth: PropTypes.number,
    previewHeight: PropTypes.number,
    autoPrint: PropTypes.bool,
    children: PropTypes.node,
    language: PropTypes.string,
    properties: PropTypes.shape({}),
    preferences: PropTypes.shape({
      HideToolbar: PropTypes.bool,
      HideMenubar: PropTypes.bool,
      HideWindowUI: PropTypes.bool,
      FitWindow: PropTypes.bool,
      CenterWindow: PropTypes.bool,
      DisplayDocTitle: PropTypes.bool,
      NonFullScreenPageMode: PropTypes.oneOf(['UseNone', 'UseOutlines', 'UseThumbs', 'UseOC']),
      Direction: PropTypes.oneOf(['L2R', 'R2L']),
      ViewArea: PropTypes.oneOf(['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox']),
      ViewClip: PropTypes.oneOf(['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox']),
      PrintArea: PropTypes.oneOf(['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox']),
      PrintClip: PropTypes.oneOf(['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox']),
      PrintScaling: PropTypes.oneOf(['AppDefault', 'None']),
      Duplex: PropTypes.oneOf(['Simplex', 'DuplexFlipLongEdge', 'DuplexFlipShortEdge']),
      PickTrayByPDFSize: PropTypes.bool,
      PrintPageRange: PropTypes.array,
      NumCopies: PropTypes.number
    })
  }

  static defaultProps = {
    save: false,
    autoPrint: false,
    preview: false,
    previewWidth: 600,
    previewHeight: 900,
    language: 'en-US',
    properties: {},
    preferences: {
      HideToolbar: false,
      HideMenubar: false,
      HideWindowUI: false,
      FitWindow: false,
      CenterWindow: false,
      DisplayDocTitle: false,
      NonFullScreenPageMode: 'UseNone',
      Direction: 'L2R',
      ViewArea: 'CropBox',
      ViewClip: 'CropBox',
      PrintArea: 'CropBox',
      PrintClip: 'CropBox',
      PrintScaling: 'AppDefault',
      PickTrayByPDFSize: false,
      NumCopies: 1
    }
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
      loading: true,
      doc
    }
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState(prevState => ({ loading: !prevState }))
    })
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
      previewWidth,
      previewHeight,
      children,
      autoPrint,
      language,
      properties,
      preferences
    } = this.props
    const { doc, loading, callChildren } = this.state

    if (loading) return null

    let contentIframe = null
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
    doc.setLanguage(language)
    doc.viewerPreferences(preferences, true)
    if (isLoad && save) {
      if (autoPrint) doc.autoPrint()
      doc.save(filename)
    } else if (isLoad && preview) {
      const uri = doc.output('datauristring')
      contentIframe = <iframe frameBorder='0' width={previewWidth} height={previewHeight} src={uri} />
    }
    return (
      <React.Fragment>
        {contentIframe}
        {content}
      </React.Fragment>
    )
  }
}

export default PDF
