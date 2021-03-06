import React, { useState, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'

const Togglable = forwardRef(({ children, buttonLabel }, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    visible
      ? (
          <>
            { children }
            <div><button onClick={toggleVisibility} >Cancel</button></div>
          </>
        )
      : <div><button onClick={toggleVisibility} >{buttonLabel}</button></div>
  )
})

Togglable.displayName = Togglable
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.object
}

export default Togglable
