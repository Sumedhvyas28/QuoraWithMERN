import React from 'react'
import './css/Widget.css'
import WidgetContent from './WidgetContent'

function Widget() {
  return (
    <div className='widget'>
      <div className='widget__header'>
        <h5>spaces to follow</h5> 
      </div>
      <div className='widget__content'>
        <WidgetContent/>
      </div>
    </div>
  )
}

export default Widget