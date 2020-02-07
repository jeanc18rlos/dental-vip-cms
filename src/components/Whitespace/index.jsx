import React from 'react'
import showdown from "showdown";
const converter = new showdown.Converter();

const WhiteSpace = props => {
  const { bgColor, text } = props
  return text ? <div dangerouslySetInnerHTML={{
    __html: converter.makeHtml(text)
  }} className="whiteSpace" style={{ background: bgColor }} >
    
  </div> : <div className="whiteSpace" style={{ background: bgColor }} />
  
}
export default WhiteSpace

