import React from 'react'
import PropTypes from 'prop-types'

const Preloader = props => {
  const { preloader, title } = props
  return (
    <div
      id="preloader"
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 100,
        top: '0',
        left: '0',
        background: '#333',
        height: '100%',
        padding: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img alt="loading..." style={{ width: '80%' }} src={preloader} />
      <h2
        style={{
          animationDuration: '3s',
          fontFamily: 'Roboto',
          fontWeight: 100,
          color: 'white',
          marginTop: '5vh',
        }}
        className="animated flash infinite"
      >
        {title}
      </h2>
    </div>
  )
}
export default Preloader
Preloader.propTypes = {
  preloader: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
