// Depenencies
import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,

      // Modal content
      title: '',
      paragraph1: '',
      paragraph2: '',

      // Styles
      style1: true,
      style2: false,
      style3: false,
      style4: false,
    }
  }

  componentWillMount() {
    const { title, paragraph1, paragraph2, active } = this.props
    this.setState({
      active,
      title,
      paragraph1,
      paragraph2,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.state.active) {
      this.setState({ active: nextProps.active })
    }
  }

  closeModal = () => {
    this.setState({ style1: false }, () => {
      setTimeout(() => {
        this.setState({ active: false, style1: true })
        this.props.close(false)
      }, 400)
    })
  }

  render() {
    const { active, title, paragraph1, paragraph2, style1 } = this.state
    return (
      <div id="Modal" className={`dv-modal ${active ? 'dv-modal-block' : ''} `}>
        <div className="content-modal">
          <div className={`containermodal ${style1 ? 'style-1a' : 'style-1'}`}>
            <h3 className="dv-modal-title">{title}</h3>
            <p className="text-center">{paragraph1}</p>
            <p className="text-center">{paragraph2}</p>
            <hr />
            <button onClick={this.closeModal}>OK</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
