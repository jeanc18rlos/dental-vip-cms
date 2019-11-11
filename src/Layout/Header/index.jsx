import React, { useState, useEffect } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { isMobile } from 'react-device-detect'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, navigate } from 'gatsby'
import  usaIcon from '../../img/layout/icons/usa.png'
import esIcon from '../../img/layout/icons/spain.png'

const isThePage = (url, link) => {
  if (`${url}` === `${link}`) {
    return true
  }
  if (link !== '/' && url.indexOf(link) !== -1) {
    return true
  }

  return false
}

const Header = props => {
  const {
    langRedir,
    dropdown,
    toggleDrop,
    setLang,
    lang,
    url,
    width,
    theme,
    logo,
    placeholder,
    links,
    social,
  } = props
  const [clinic, setClinic] = useState(false)
  const [specialties, setSpecialties] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const [isSearchOpen, setSearch] = useState(false)
  const propis = {
    clinic,
    specialties,
  }
  const toggleSearch = () => {
    if (isSearchOpen) {
      document.body.style.overflow = 'auto'
    } else if (isMobile) {
      document.body.style.overflow = 'hidden'
    }
    setSearch(!isSearchOpen)
  }
  const toggleSidebar = resize => {
    if (resize) {
      document.body.style.overflow = 'auto'
      return setSidebar(false)
    }
    if (sidebar) {
      document.body.style.overflow = 'auto'

      setSidebar(!sidebar)
      setClinic(false)
      return setSpecialties(false)
    }
    document.body.style.overflow = 'hidden'
    return setSidebar(!sidebar)
  }

  const toggleSubMenu = (state, val) => {
    if (state === 'clinic') {
      if (specialties && width <= 850) {
        setSpecialties(false)
      }
      setClinic(val)
    } else if (state === 'specialties') {
      if (clinic && width <= 850) {
        setClinic(false)
      }
      setSpecialties(val)
    }
  }
  const updateWindowDimensions = () => {
    setClinic(false)
    setSpecialties(false)
    toggleSidebar(true)
  }

  useEffect(() => {
    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  return (
    <header
      className={classnames(theme === 'dark' ? 'header-dark' : 'header-light')}
    >
      <Modal
        style={{ overflow: 'hidden' }}
        backdropTransition={{
          baseClass: 'someClass',
          baseClassIn: 'someToggled',
          timeout: 100,
        }}
        className="someClass"
        isOpen={isSearchOpen}
        toggle={() => {
          if (sidebar) {
            toggleSidebar()
          }
          toggleSearch()
        }}
      >
        <ModalHeader
          toggle={() => {
            if (sidebar) {
              toggleSidebar()
            }
            toggleSearch()
          }}
        />
        <ModalBody>
          <form>
            <div className="input-group">
              <input type="text" placeholder={placeholder} />
              <button type="submit">
                <i className="icon-search" />
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
      <div className="sidenav-backdrop" />
      <Navbar className="row" dark expand="md">
        <NavbarBrand
          onClick={() => {
            navigate(links[0].to)
          }}
        >
          <img alt="Dentalvip" src={logo} />
        </NavbarBrand>
        {width >= 1024 ? (
          <Nav className=" ml-auto" navbar>
            {links.map((i, k) => {
              const index = k

              return !i.subMenu ? (
                <NavItem key={`${i.title}-link-${index}`}>
                  <Link
                    activeClassName="current"
                    partiallyActive={i.to !== '/' && i.to !== '/en/'}
                    className={classnames('nav-link backface-anim')}
                    to={i.to}
                  >
                    {i.title}
                  </Link>
                </NavItem>
              ) : (
                <NavItem
                  key={`${i.title}-link-${index}`}
                  onMouseEnter={() => {
                    toggleSubMenu(i.props.stateRef, 'slideInDown visible')
                  }}
                  onMouseLeave={() => {
                    toggleSubMenu(i.props.stateRef, 'slideOutUp')
                  }}
                >
                  <Link
                    onClick={e => {
                      e.preventDefault()
                    }}
                    className={classnames(
                      'backface-anim nav-link',
                      isThePage(url, i.to) && 'current',
                      propis[i.props.stateRef] === 'slideInDown visible' &&
                        'active'
                    )}
                    to={i.to}
                  >
                    {i.title}{' '}
                    <span class="dv-more">
                      <i class="icon-angle-down" />
                    </span>
                  </Link>

                  <ul
                    className={classnames(
                      'sub-menu',
                      'animated',
                      propis[i.props.stateRef] && `${propis[i.props.stateRef]}`
                    )}
                  >
                    {i.subMenu.map((item, position) => {
                      const index2 = position
                      return (
                        <li key={`${item.title}-submenu-${index2}`}>
                          <Link
                            className={classnames(
                              isThePage(url, item.to) && 'current'
                            )}
                            to={`${item.to}`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </NavItem>
              )
            })}

            <NavItem>
              <NavLink
                onClick={e => {
                  e.preventDefault()
                  if (sidebar) {
                    toggleSidebar()
                  }
                  toggleSearch()
                }}
                style={{ paddingRight: '0px' }}
                href="#"
              >
                <i className="icon-search" />
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav className=" ml-auto">
            <NavItem style={{ display: 'flex', alignItems: 'center' }}>
              <NavLink href="tel:+582122615251" style={{ display: 'flex' }}>
                <i
                  style={{
                    transform: '',
                    fontSize: '18px',
                    lineHeight: '20px',
                  }}
                  className="icon-phone"
                />
              </NavLink>
            </NavItem>

            <NavItem style={{ display: 'flex', alignItems: 'center' }}>
              <NavLink
                onClick={() => {
                  toggleSidebar()
                }}
                className={`${sidebar && 'active'}`}
                style={{ paddingRight: '0' }}
                href="#"
              >
                <i className="burger-icon" />
              </NavLink>
            </NavItem>

            <div className={`${sidebar && 'toggled'} ${'side-nav-wrapper'}`}>
              <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-search">
                  <div />
                </div>
                <div className="sidebar-menu">
                  <ul>
                    <li className="lang-item title-link sidebar-dropdown">
                      <a
                        style={{ padding: '2.5rem 1.5rem' }}
                        onClick={e => {
                          e.preventDefault()
                          toggleDrop(!dropdown)
                        }}
                        className="sub-menu-link"
                        href="#"
                      >
                        {lang === 'es' ? (
                          <>
                            <img alt="español" src={esIcon} />
                            &nbsp;&nbsp;&nbsp;ES
                          </>
                        ) : (
                          <>
                            <img alt="english" src={usaIcon} />
                            &nbsp;&nbsp;&nbsp;EN
                          </>
                        )}
                        <span
                          className={classnames(
                            dropdown && 'active',
                            'lang indicator'
                          )}
                        >
                          <i className="icon-angle-down" />
                        </span>
                      </a>
                      <div
                        className={classnames(
                          dropdown && 'active',
                          'sidebar-submenu'
                        )}
                      >
                        <ul>
                          <li>
                            <a
                              className=""
                              href="#"
                              onClick={() => {
                                setLang(lang !== 'es' ? 'es' : 'en')
                                toggleDrop(false)
                                toggleSidebar()
                                setTimeout(() => {
                                  navigate(
                                    langRedir === '/error'
                                      ? `${(lang === 'es' && '/en/error') ||
                                          langRedir}`
                                      : langRedir
                                  )
                                }, 100)
                              }}
                            >
                              {lang !== 'es' ? (
                                <>
                                  <img alt="spanish" src={esIcon} />
                                  &nbsp;&nbsp;&nbsp;SPANISH
                                </>
                              ) : (
                                <>
                                  <img alt="inglés" src={usaIcon} />
                                  &nbsp;&nbsp;&nbsp;INGLÉS
                                </>
                              )}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {links.map((i, k) => {
                      const index2 = k
                      return !i.subMenu ? (
                        <li
                          key={`${i.title}-link-mobile-${index2}`}
                          className="title-link"
                        >
                          <Link
                            activeClassName="current"
                            partiallyActive={i.to !== '/' && i.to !== '/en/'}
                            to={i.to}
                          >
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ) : (
                        <li
                          key={`${i.title}-link-mobile-${index2}`}
                          className="title-link sidebar-dropdown"
                        >
                          <Link
                            onClick={e => {
                              e.preventDefault()
                              toggleSubMenu(
                                i.props.stateRef,
                                !propis[i.props.stateRef]
                              )
                            }}
                            activeClassName="current"
                            partiallyActive={i.to !== '/' && i.to !== '/en/'}
                            className={classnames('sub-menu-link')}
                            to={i.to}
                          >
                            {i.title}
                            <span
                              className={classnames(
                                propis[i.props.stateRef] &&
                                  propis[i.props.stateRef] !==
                                    'slideOutUp visible' &&
                                  'active',
                                'indicator close-menu'
                              )}
                            >
                              <i className="icon-times" />
                            </span>
                          </Link>
                          <div
                            className={classnames(
                              propis[i.props.stateRef] &&
                                propis[i.props.stateRef] !==
                                  'slideOutUp visible' &&
                                'active',
                              'sidebar-submenu'
                            )}
                          >
                            <ul>
                              {i.subMenu.map((item, position) => {
                                const index = position
                                return (
                                  <li
                                    key={`${item.title}-submenu-mobile-${index}`}
                                  >
                                    <Link
                                      activeClassName="current"
                                      partiallyActive={
                                        i.to !== '/' && i.to !== '/en/'
                                      }
                                      to={item.to}
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </li>
                      )
                    })}
                    <li>
                      <div
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => {
                          e.preventDefault()
                          if (sidebar) {
                            toggleSidebar()
                          }
                          toggleSearch()
                        }}
                        onClick={e => {
                          e.preventDefault()
                          if (sidebar) {
                            toggleSidebar()
                          }
                          toggleSearch()
                        }}
                        className="dv-mob-btn"
                      >
                        <i className="icon-search" />
                      </div>
                    </li>
                    <li className="social">
                      <div className="dv-mob-btn">
                        <a
                          className="facebook"
                          href={social.facebook}
                          target="blank"
                        >
                          <i className="icon-facebook" />
                        </a>
                        <a
                          className="instagram"
                          href={social.instagram}
                          target="blank"
                        >
                          <i className="fa icon-instagram" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </Nav>
        )}
      </Navbar>
    </header>
  )
}

export default Header
