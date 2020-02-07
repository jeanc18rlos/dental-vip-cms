import React from 'react'

const Quotes = props => {
  const { title, body, author, footer } = props
  return (
    <section id="dv-home-message">
      <div className="container-fluid dv-main-menu">
        <blockquote>
          <p>
            {title && (
              <>
                <strong>{title}</strong>
                <br />
              </>
            )}
            <em>{body}</em>
          </p>
        </blockquote>
        <hr className="dv-quote-hr" />
        <p className="dv-quote-author">{author}</p>
        <p className="dv-quote-position">{footer.position}</p>
        <p className="dv-quote-position">{footer.clinic}</p>
      </div>
    </section>
  )
}
export default Quotes