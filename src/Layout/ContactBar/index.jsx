import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { navigate } from 'gatsby'
import  usaIcon from '../../img/layout/icons/usa.png'
import esIcon from '../../img/layout/icons/spain.png'
const ContactBar = props => {
  const [dropdown, toggleDrop] = useState(false)
  const { schedule, phone, location, lang, langRedir } = props
  return (
    <div id="dv-contact-nav" className="light-nav container col-md-12">
      <div className="row ">
        <div className="dv-main-menu div-top col-md-12">
          <div className="row">
            <div className=" col-lg-10 col-xl-11 dv-top-w">
              <div className="nw dv-left-div dv-right-div">
                <i className="icon-clock" /> {schedule}
              </div>
              <div className="nw dv-right-div">
                <i className="icon-phone" />
                {phone}
              </div>
              <div className=" dv-right-div dv-large-text">
                <i className="icon-map-marker-alt" /> {location}
              </div>
              <div
                role="button"
                onFocus={
                  ()=>{
                    toggleDrop(true)
                  }
                }
                onMouseLeave={() => {
                  toggleDrop(false)
                }}
                className="lang"
              >
                <Dropdown
                  isOpen={dropdown}
                  toggle={() => {
                    toggleDrop(!dropdown)
                  }}
                  onClick={() => {
                    toggleDrop(!dropdown)
                  }}
                  onMouseOver={() => {
                    toggleDrop(true)
                  }}
                  onFocus={() => {
                    toggleDrop(true)
                  }}
                >
                  <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdown}
                    caret
                  >
                    {lang === 'es' ? (
                      <>
                        <img alt="español" src={esIcon} />
                        ES
                      </>
                    ) : (
                      <>
                        <img alt="english" src={usaIcon} />
                        EN
                      </>
                    )}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => {
                        navigate(
                          langRedir === '/error'
                            ? `${(lang === 'es' && '/en/error') || langRedir}`
                            : langRedir
                        )
                      }}
                    >
                      {lang !== 'es' ? (
                        <>
                          <img alt="spanish" src={esIcon} />
                          SPANISH
                        </>
                      ) : (
                        <>
                          <img alt="inglés" src={usaIcon} />
                          INGLÉS
                        </>
                      )}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="col-lg-2 col-xl-1 row dv-sm-nav">
              <div className="col-sm-6 text-right" />
              <div
                className="col-sm-6 text-right"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dv-sm-nav dv-sm-nav-fac"
                  href="https://www.facebook.com/dentalvip/"
                >
                  <i className="icon-facebook" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dv-sm-nav dv-sm-nav-inst"
                  href="https://www.instagram.com/dental_vip/"
                >
                  <i className="icon-instagram" />
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBar
