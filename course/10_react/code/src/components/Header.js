import React from 'react'

const getLoadingIcon = loading => {
  return loading ? <span className='glyphicon glyphicon-hourglass' aria-hidden='true' /> : <noscript />
}

export default (props) => (
  <div className='header clearfix'>
    <h3 className='text-muted'>React Lesson</h3>
    {getLoadingIcon(props.loading)}
  </div>
)
