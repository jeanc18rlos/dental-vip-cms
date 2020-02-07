// Dependencies
import React from 'react'
import showdown from "showdown";
const converter = new showdown.Converter();

const BasicContent = props => {
  const { classname, title, content } = props

  return (
    <section id="BasicContent-cp" className={classname}>
      <div className="container-fluid dv-main-menu">
        <h1 className="dv-page-titles text-center">{title}</h1>
        <div dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(content)
                }}></div>
      </div>
    </section>
  )
}

export default BasicContent
