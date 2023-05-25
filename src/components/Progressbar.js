import React from 'react'

export default function Progressbar(props) {
  return (
    <>
    <div id ="progressBar">
    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-warning" style={props.styleProg}></div>
    </div>
    </div>
    </>
  )
}
